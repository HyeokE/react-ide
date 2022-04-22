import React from 'react';
import styled from 'styled-components';
import Directory from '../Directory';

const SideMenuWrapper = styled.div`
  resize: horizontal;
  height: 100%;
  width: 200px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.grey400};
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
    fileInfo: ['index.tsx', 'App.tsx'],
  },
  {
    folderName: 'aboutMe',
    fileInfo: ['June.tsx', 'Sohui.tsx'],
  },
  {
    folderName: 'projects',
    fileInfo: ['June.tsx'],
  },
  {
    folderName: 'experience',
    fileInfo: ['June.tsx'],
  },
  {
    folderName: 'communication',
    fileInfo: ['June.tsx'],
  },
];

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <ProjectName>Project Name</ProjectName>
      {directoryStructure.map(({ folderName, fileInfo }) => (
        <Directory
          key={folderName}
          folderName={folderName}
          fileInfo={fileInfo}
        />
      ))}
    </SideMenuWrapper>
  );
};

export default SideMenu;
