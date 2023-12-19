import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <Sidebar />

        <main>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export default Layout;
