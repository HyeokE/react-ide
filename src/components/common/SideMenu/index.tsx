import React from 'react';
import styled from 'styled-components';
import Arrow from '../../../assets/Arrow.png';

const SideMenuWrapper = styled.div`
  resize: horizontal;
  height: 100%;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.grey400};
`;
const SideComponent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  padding: 10px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ArrowImage = styled.img`
  padding: 0 10px;
`;

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <SideComponent>
        <ArrowImage src={Arrow} />
        SideMenu
      </SideComponent>
    </SideMenuWrapper>
  );
};

export default SideMenu;
