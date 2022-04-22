import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Navigation from './components/common/Navigation';
import SideMenu from './components/common/SideMenu';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Container>
      <Navigation />
      <SideMenu />
      <Routes>
        <Route path={'/*'} element={<AboutMe />} />
      </Routes>
    </Container>
  );
}

export default App;
