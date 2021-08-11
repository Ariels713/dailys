import React from "react";

function CardIcon(props) {
  const title = props.title || "setup tools";

  return (
    <svg
      height="48"
      width="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <path
          d="M45,47H3c-1.10457,0-2-0.89543-2-2V3c0-1.10457,0.89543-2,2-2h42c1.10457,0,2,0.89543,2,2v42 C47,46.10457,46.10457,47,45,47z"
          fill="#a6f3fc"
        />
        <path
          d="M40,17H18c-0.55225,0-1-0.44775-1-1s0.44775-1,1-1h22c0.55225,0,1,0.44775,1,1S40.55225,17,40,17z"
          fill="#24d2ed"
        />
        <path
          d="M15,17H8c-0.55225,0-1-0.44775-1-1s0.44775-1,1-1h7c0.55225,0,1,0.44775,1,1S15.55225,17,15,17z"
          fill="#24d2ed"
        />
        <path
          d="M30,33H8c-0.55225,0-1-0.44775-1-1s0.44775-1,1-1h22c0.55225,0,1,0.44775,1,1S30.55225,33,30,33z"
          fill="#24d2ed"
        />
        <path
          d="M40,33h-8c-0.55225,0-1-0.44775-1-1s0.44775-1,1-1h8c0.55225,0,1,0.44775,1,1S40.55225,33,40,33z"
          fill="#24d2ed"
        />
        <circle cx="16" cy="16" fill="#FFFFFF" r="5" />
        <circle cx="32" cy="32" fill="#FFFFFF" r="5" />
      </g>
    </svg>
  );
}

export default CardIcon;
