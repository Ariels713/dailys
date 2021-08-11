import React from "react";

function CodeLink(props) {
  const title = props.title || "code editor";

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
          d="M47,11V6c0-1.105-0.895-2-2-2H3C1.895,4,1,4.895,1,6v5H47z"
          fill="#444444"
        />
        <path
          d="M45,43H15V11h32v30C47,42.105,46.105,43,45,43z"
          fill="#606060"
        />
        <path d="M16,43H3c-1.105,0-2-0.895-2-2V11h15V43z" fill="#4F4F4F" />
        <circle cx="4.5" cy="7.5" fill="#E86C60" r="1.5" />
        <circle cx="9.5" cy="7.5" fill="#EFD358" r="1.5" />
        <circle cx="14.5" cy="7.5" fill="#72C472" r="1.5" />
        <rect height="2" width="7" fill="#B3B3B3" x="5" y="14" />
        <rect height="2" width="5" fill="#B3B3B3" x="5" y="20" />
        <rect height="2" width="7" fill="#B3B3B3" x="5" y="26" />
        <rect height="2" width="5" fill="#B3B3B3" x="5" y="32" />
        <rect height="2" width="7" fill="#B3B3B3" x="5" y="38" />
        <rect height="2" width="5" fill="#E86C60" x="20" y="14" />
        <rect height="2" width="7" fill="#EFD358" x="24" y="20" />
        <rect height="2" width="10" fill="#FFFFFF" x="27" y="26" />
        <rect height="2" width="7" fill="#EFD358" x="24" y="32" />
        <rect height="2" width="5" fill="#E86C60" x="20" y="38" />
      </g>
    </svg>
  );
}

export default CodeLink;
