import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAllTrending } from 'servises/api';

import { Gallery } from 'components/Gallery/Gallery';
import { TopBar } from 'components/TopBar/TopBar';
import { RadioButtonForm } from 'components/RadioButtonForm/RadioButtonForm';
import { LoadingSpinner } from 'components/Loader/Loader';

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [topMovies, setTopMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const range = searchParams.get('range') || 'day';

  const onRangeChange = value => {
    setSearchParams({ range: value });
  };

  useEffect(() => {
    setLoading(true);

    const getTopMovies = async () => {
      try {
        const data = await getAllTrending(range);
        setTopMovies(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTopMovies();
  }, [range]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div style={{ width: 998, padding: 60 }}>
        <TopBar
          title={'Welcome to'}
          span={'MovieBox'}
          text={
            'Browse movies, add them to watchlists and share them with friends. Just click the to add a movie, the poster to see more details or to mark the movie as watched.'
          }
        />
        <h2>Popular movies right now</h2>
        <RadioButtonForm onChange={onRangeChange}></RadioButtonForm>

        <Gallery gallery={topMovies}></Gallery>
      </div>
    </>
  );
};

export default Home;
