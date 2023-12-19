import { useEffect, useState, useRef } from 'react';
import { searchMovie } from 'servises/api';
import { TopBar } from 'components/TopBar/TopBar';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Gallery } from '../components/Gallery/Gallery';
import { GoToBack } from 'components/GoToBack/GoToBack';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const location = useLocation();
  const backHomeLink = useRef(location.state?.from ?? '/');

  // const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get();
  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';
    if (!searchQuery) return;

    const getMovies = async () => {
      try {
        const { results } = await searchMovie(searchQuery, page);

        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, [page, searchParams]);

  const handleSubmit = value => {
    const query = value !== '' ? { query: value } : {};
    setSearchParams(query);

    setPage(1);
    setMovies([]);
  };

  return (
    <div style={{ width: 998, padding: 60 }}>
      <Link to={backHomeLink.current}>
        <GoToBack></GoToBack>
      </Link>
      <TopBar
        title={'Movie serch on'}
        span={'MovieBox'}
        text={
          'Browse movies, add them to watchlists and share them with friends. Just click the to add a movie, the poster to see more details or to mark the movie as watched.'
        }
      />
      <SearchForm onSubmit={handleSubmit}></SearchForm>

      <Gallery gallery={movies}></Gallery>
    </div>
  );
};

export default Movies;
