import React from 'react';
import { TopBarWrapper, TopBarTitle, TopBarText } from './TopBar.styled';

export const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarTitle>
        Welcome to <span style={{ color: '#f33f3f' }}>MovieBox</span>
      </TopBarTitle>
      <TopBarText>
        Browse movies, add them to watchlists and share them with friends. Just
        click the to add a movie, the poster to see more details or to mark the
        movie as watched.
      </TopBarText>
    </TopBarWrapper>
  );
};
