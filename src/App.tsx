import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Navigation from './components/common/Navigation';
import SideMenu from './components/common/SideMenu';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Container>
      <Navigation />
      <SideMenu />
    </Container>
  );
}

export default App;
