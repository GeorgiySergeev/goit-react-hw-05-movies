import React from 'react';
import { TopBarWrapper, TopBarTitle, TopBarText } from './TopBar.styled';

export const TopBar = ({ title, text, span }) => {
  return (
    <TopBarWrapper>
      <TopBarTitle>
        {title} {<span style={{ color: '#f33f3f' }}>{span}</span>}
        {/* Welcome to <span style={{ color: '#f33f3f' }}>MovieBox</span> */}
      </TopBarTitle>
      <TopBarText>{text}</TopBarText>
    </TopBarWrapper>
  );
};
