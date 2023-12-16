import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/api';

const Reviews = () => {
  const [rev, setRev] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fatchReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);

        setRev(results);
      } catch (error) {
        console.log(error);
      }
    };

    fatchReviews();
  }, [movieId]);

  return (
    <div>
      {!rev.length ? (
        <p>No results</p>
      ) : (
        <ul>
          {rev.map(({ id, url, content }) => {
            return (
              <li key={id}>
                <p>{content}</p>
                <a href={url}></a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
