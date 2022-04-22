import React, { useState } from 'react';
import Arrow from '../../../assets/Arrow.png';
import styled, { css } from 'styled-components';
import File from '../File';
import { useLocation, useNavigate } from 'react-router-dom';
const SideComponent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  padding: 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
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

const Directory: React.FC<{ folderName: string; fileInfo: string[] }> = ({
  folderName,
  fileInfo,
}) => {
  const location = useLocation();
  const path = location.pathname.includes(folderName.toLowerCase());
  const navigate = useNavigate();
  return (
    <>
      <SideComponent
        onClick={() => {
          navigate(`/${folderName.toLowerCase()}`);
        }}
      >
        <ArrowImage src={Arrow} isOpen={path} />
        {folderName}
      </SideComponent>
      <FileWrapper>
        {path &&
          fileInfo.map((data, id) => (
            <File FileName={data} key={id} folderName={folderName} />
          ))}
      </FileWrapper>
    </>
  );
};

export default Directory;
