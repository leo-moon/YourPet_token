import * as React from 'react';

function AddPhotoIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 52 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26 49V25M26 25V1M26 25H50.375M26 25H1.625"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default AddPhotoIcon;
