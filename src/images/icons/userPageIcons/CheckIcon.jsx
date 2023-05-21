import * as React from 'react';

function CheckIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.0001 1L6.0001 12L1 7"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export default CheckIcon;
