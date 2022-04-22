import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

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
const BreadCrumbInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 7px;
  color: ${({ theme }) => theme.colors.grey400};
  font-size: ${({ theme }) => theme.fontSize.body1};
`;
const BreadCrumb = styled.div<{ last: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey400};
  font-size: ${({ theme }) => theme.fontSize.body1};
  padding-left: 7px;
  ${({ last }) =>
    last &&
    css`
      color: ${({ theme }) => theme.colors.selected};
    `}
`;

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname.slice(1).split('/');
  return (
    <NavigationWrapper>
      <NavigationTop>JunHyeok-Portfolio - Home.tsx</NavigationTop>
      <BreadCrumbWrapper>
        JunHyeok-Portfolio
        {path.map((data, id) => (
          <BreadCrumbInner key={id}>
            &gt;
            <BreadCrumb last={id + 1 === path.length}>{data}</BreadCrumb>
          </BreadCrumbInner>
        ))}
      </BreadCrumbWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
