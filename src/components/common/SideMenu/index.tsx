import React from 'react';
import styled from 'styled-components';
import Directory from '../Directory';
import { theme } from '../../../styles/theme';
import { directoryStructure } from '../../../datas/directoryStructure';

const SideMenuWrapper = styled.div`
  resize: horizontal;
  height: 100%;
  width: 250px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.grey400};
  box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.3);
`;

const ProjectName = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.elementLayout};
  font-size: ${({ theme }) => theme.fontSize.body1};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const License = styled.a`
  position: absolute;
  color: ${({ theme }) => theme.colors.grey400};
  font-size: ${({ theme }) => theme.fontSize.body3};
  bottom: 5px;
`;

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <ProjectName>Project Name</ProjectName>
      {directoryStructure.map((data, id) => (
        <Directory key={id} {...data} />
      ))}
      <License href={'https://github.com/HyeokE/react-ide'}>
        ©2022. JunHyeok
      </License>
    </SideMenuWrapper>
  );
};

export default SideMenu;
