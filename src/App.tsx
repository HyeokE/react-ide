import React from 'react';
import styled from 'styled-components';
import Navigation from './components/common/Navigation';
import SideMenu from './components/common/SideMenu';
import Layout from './Layout';

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
        <Layout />
      </ElementWrapper>
    </Container>
  );
}

export default App;
