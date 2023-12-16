import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servises/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fathMovie = async () => {
      try {
        const { cast } = await getMovieCredits(movieId);

        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fathMovie();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ id, name }, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cast;
