import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/icons/nav/Home.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/nav/search.svg';

import { GenreList } from 'components/GenreList/GenreList';

import {
  HeaderContainer,
  Nav,
  HeadTitle,
  NavButton,
  AddToListButton,
} from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <HeaderContainer>
      <HeadTitle>MovieBox</HeadTitle>
      <Nav>
        <NavLink to="/">
          <NavButton>
            <HomeIcon />
            <p>Home</p>
          </NavButton>
        </NavLink>
        <NavLink to="/movies">
          <NavButton>
            <SearchIcon />
            <p>Search movies</p>
          </NavButton>
        </NavLink>
      </Nav>
      <AddToListButton>+ Create watchlist</AddToListButton>
      <GenreList></GenreList>
    </HeaderContainer>
  );
};
