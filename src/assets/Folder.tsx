import React from 'react';

const Folder: React.FC<{ color: string }> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 96 96"
      style={{ marginRight: '7px' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 16H16C11.6 16 8.04 19.6 8.04 24L8 72C8 76.4 11.6 80 16 80H80C84.4 80 88 76.4 88 72V32C88 27.6 84.4 24 80 24H48L40 16Z"
        fill={color}
      />
    </svg>
  );
};

export default Folder;
