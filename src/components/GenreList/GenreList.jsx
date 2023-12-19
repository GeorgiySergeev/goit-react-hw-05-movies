import React from 'react';
import { getGenre } from 'servises/api';
import { useEffect, useState } from 'react';
import { GenreListWrapper, GenreListStyled } from './GenreList.styled';
import { NavLink } from 'react-router-dom';

export const GenreList = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const getGenresList = async () => {
      const data = await getGenre();

      setGenre(data.genres);
    };
    getGenresList();
  }, []);

  return (
    <>
      <GenreListWrapper>
        <GenreListStyled>
          {genre.map(({ id, name }, index) => {
            return (
              <NavLink to={`/genres/${name}`} key={id}>
                <li>{name}</li>
              </NavLink>
            );
          })}
        </GenreListStyled>
      </GenreListWrapper>
    </>
  );
};
