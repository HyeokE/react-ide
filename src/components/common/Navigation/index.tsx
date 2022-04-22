import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  width: 100%;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.elementLayout};
`;
const NavigationTop = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey400};
  font-size: ${({ theme }) => theme.fontSize.body1};
`;
const BreadCrumbWrapper = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.grey400};
  font-size: ${({ theme }) => theme.fontSize.body1};
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationTop>JunHyeok-Portfolio - Home.tsx</NavigationTop>
      <BreadCrumbWrapper>JunHyeok-Portfolio &gt; Home</BreadCrumbWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
