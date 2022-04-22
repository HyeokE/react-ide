import React from 'react';
import styled from 'styled-components';
import Directory from '../Directory';
import { theme } from '../../../styles/theme';

const SideMenuWrapper = styled.div`
  resize: horizontal;
  height: 100%;
  width: 200px;
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

const directoryStructure = [
  {
    folderName: 'src',
    folderColor: theme.colors.googleBlue,
    fileInfo: ['index.tsx', 'App.tsx'],
  },
  {
    folderName: 'aboutMe',
    folderColor: theme.colors.googleGreen,
    fileInfo: ['June.tsx', 'Sohui.tsx'],
  },
  {
    folderName: 'projects',
    folderColor: theme.colors.googleRed,
    fileInfo: ['June.tsx'],
  },
  {
    folderName: 'experience',
    folderColor: theme.colors.googleYellow,
    fileInfo: ['June.tsx'],
  },
  {
    folderName: 'communication',
    folderColor: theme.colors.tossBlue,
    fileInfo: ['June.tsx'],
  },
];

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <ProjectName>Project Name</ProjectName>
      {directoryStructure.map((data, id) => (
        <Directory key={id} {...data} />
      ))}
    </SideMenuWrapper>
  );
};

export default SideMenu;
