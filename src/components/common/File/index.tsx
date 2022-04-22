import React from 'react';
import styled from 'styled-components';
import TypeScript from '../../../assets/Typescript.png';
import { useNavigate } from 'react-router-dom';

const FileWrapper = styled.div`
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: #30363f;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }
`;

const FileImage = styled.img`
  padding: 0 7px;
  position: relative;
  top: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 15px;
`;
const File: React.FC<{ FileName: string; folderName: string }> = ({
  FileName,
  folderName,
}) => {
  const navigate = useNavigate();
  const PATHNAME_TO_LOWERCASE = `${folderName}/${FileName}`;
  return (
    <FileWrapper
      onClick={() => {
        navigate(PATHNAME_TO_LOWERCASE);
      }}
    >
      <FileImage src={TypeScript} />
      {FileName}
    </FileWrapper>
  );
};

export default File;
