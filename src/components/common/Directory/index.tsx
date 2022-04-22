import React, { useState } from 'react';
import Arrow from '../../../assets/Arrow.png';
import styled, { css } from 'styled-components';
import File from '../File';
import { useLocation, useNavigate } from 'react-router-dom';
import Folder from '../../../assets/Folder';
import { theme } from '../../../styles/theme';
const SideComponent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  padding: 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: #30363f;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }
`;
const ArrowImage = styled.img<{ isOpen: boolean }>`
  padding: 0 10px;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(90deg);
    `}
`;

const FileWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Directory: React.FC<{
  folderName: string;
  fileInfo: string[];
  folderColor: string;
}> = ({ folderName, fileInfo, folderColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SideComponent
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <ArrowImage src={Arrow} isOpen={isOpen} />
        <Folder color={folderColor} />
        {folderName}
      </SideComponent>
      <FileWrapper>
        {isOpen &&
          fileInfo.map((data, id) => (
            <File FileName={data} key={id} folderName={folderName} />
          ))}
      </FileWrapper>
    </>
  );
};

export default Directory;
