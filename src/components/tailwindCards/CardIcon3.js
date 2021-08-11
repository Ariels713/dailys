import React from "react";

function CardIcon3(props) {
  const title = props.title || "CardIcon3";

  return (
    <svg
      height="48"
      width="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <rect height="46" width="12" fill="#21d3ee" rx="1" ry="1" x="1" y="1" />
        <rect
          height="46"
          width="10"
          fill="#21d3ee"
          opacity="0.8"
          rx="1"
          ry="1"
          x="18"
          y="1"
        />
        <rect
          height="46"
          width="7"
          fill="#21d3ee"
          opacity="0.6"
          rx="1"
          ry="1"
          x="33"
          y="1"
        />
        <path
          d="M46,1a1,1,0,0,0-1,1V46a1,1,0,0,0,2,0V2A1,1,0,0,0,46,1Z"
          fill="#21d3ee"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CardIcon3;
