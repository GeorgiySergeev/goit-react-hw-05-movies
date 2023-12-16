import React from 'react';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
