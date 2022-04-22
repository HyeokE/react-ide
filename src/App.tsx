import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Navigation from './components/common/Navigation';
import SideMenu from './components/common/SideMenu';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';

export const Container = styled.main`
  height: calc(100vh - 70px);
  width: 100vw;
`;
export const ElementWrapper = styled.main`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Navigation />
      <ElementWrapper>
        <SideMenu />
        <Routes>
          <Route path={'/*'} element={<AboutMe />} />
        </Routes>
      </ElementWrapper>
    </Container>
  );
}

export default App;
