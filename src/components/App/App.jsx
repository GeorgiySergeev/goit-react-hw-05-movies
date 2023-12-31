import { Container } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Genres = lazy(() => import('pages/Genres'));
const WatchList = lazy(() => import('pages/WatchList'));
const NotFound = lazy(() => import('pages/404page'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId/*" element={<MovieDetails />} />
          <Route path="genres/:genre" element={<Genres />} />
          <Route path="watch-list" element={<WatchList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
