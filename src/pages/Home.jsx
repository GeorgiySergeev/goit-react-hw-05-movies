import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input, Form } from '../components/Header/Header.styled';

import { TitleSecond } from './MovieDetails.styled';

import { Gallery, GalleryWrapper } from 'pages/Home.styled';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { getAllTrending } from 'servises/api';
import { TopBar } from 'components/TopBar/TopBar';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('day');
  const [topMovies, setTopMovies] = useState([]);
  const [range, setRange] = useState('day');
  const locaation = useLocation();

  const handleOptionChange = event => {
    setSelectedOption(event.target.id);
    setRange(event.target.id);
  };

  useEffect(() => {
    const getTopMovies = async () => {
      const data = await getAllTrending(range);
      console.log(data);
      setTopMovies(data);
    };
    getTopMovies();
  }, [range]);

  return (
    <>
      <GalleryWrapper>
        <TopBar />
        {locaation.pathname === '/' && (
          <Form>
            <p>Top rate</p>
            <label htmlFor="day">
              <Input
                name="day"
                id="day"
                type="radio"
                checked={selectedOption === 'day'}
                onChange={handleOptionChange}
              />
              <p>Day</p>
            </label>
            <label htmlFor="week">
              <Input
                name="week"
                id="week"
                type="radio"
                checked={selectedOption === 'week'}
                onChange={handleOptionChange}
              />
              <p>Week</p>
            </label>
          </Form>
        )}
        <TitleSecond>Popular movies right now</TitleSecond>

        <Gallery>
          {topMovies.map(
            ({
              poster_path,
              id,
              title,
              name,
              original_title,
              popularity,
              release_date,
            }) => {
              return (
                <Link to={`/movies/${id}`} key={id}>
                  <MovieCard
                    id={id}
                    img={poster_path}
                    title={title || name}
                    rating={popularity}
                    relise={release_date}
                  ></MovieCard>
                </Link>
              );
            }
          )}
        </Gallery>
      </GalleryWrapper>
    </>
  );
};

export default Home;
