import { useEffect, useState } from 'react';
import { NavLink, Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'servises/api';
import { convertMinutesToHoursAndMinutes } from 'servises/minutesTohours';

import {
  Container,
  Image,
  HeadWrapper,
  InfoWrapper,
  Title,
  List,
  TitleSecond,
  StyledLi,
  TextOverview,
} from './MovieDetails.styled';

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const MovieDetails = () => {
  const [movieCard, setMovieCard] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movieInfo = await getMovieDetails(movieId);

        setMovieCard(movieInfo);
      } catch (error) {
        console.log(error);
      } finally {
        // setLoader(false);
      }
    }

    fetchMovie();
  }, [movieId]);

  const { title, poster_path, release_date, overview, genres, runtime } =
    movieCard;

  // console.log(movieCard);

  return (
    <Container>
      <HeadWrapper>
        <Image src={`${BASIC_IMG_URL}${poster_path}`} alt="" />
        <InfoWrapper>
          <Title>{title}</Title>
          <div style={{ display: 'flex', marginBottom: 50, maxWidth: 580 }}>
            <List>
              {genres &&
                genres.map(({ id, name }) => {
                  return <li key={id}> {name}</li>;
                })}
            </List>
            <p style={{ color: 'yellow' }}>
              {convertMinutesToHoursAndMinutes(runtime)}
            </p>
          </div>
          <TitleSecond>Overview</TitleSecond>
          <TextOverview>{overview}</TextOverview>
          <p>Relise date : {release_date}</p>
        </InfoWrapper>
      </HeadWrapper>

      <List style={{ marginBottom: 25 }}>
        <StyledLi>
          <NavLink to="cast">Cast</NavLink>
        </StyledLi>
        <StyledLi>
          <NavLink to="reviews">Reviews</NavLink>
        </StyledLi>
      </List>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
