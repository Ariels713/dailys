import React from "react";

function CardIcon2(props) {
  const title = props.title || "CardIcon2";

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
          d="M12.99999,22h22.00002C40.52285,22,45,17.52285,45,12.00001v-0.00002C45,6.47715,40.52285,2,35.00001,2 H12.99999C7.47715,2,3,6.47715,3,11.99999v0.00002C3,17.52285,7.47715,22,12.99999,22z"
          fill="#21d3ee"
        />
        <path
          d="M12.99999,46h22.00002C40.52285,46,45,41.52285,45,36.00001v-0.00002C45,30.47715,40.52285,26,35.00001,26 H12.99999C7.47715,26,3,30.47715,3,35.99999v0.00002C3,41.52285,7.47715,46,12.99999,46z"
          fill="#a5f3fd"
        />
        <circle cx="13" cy="12" fill="#FFFFFF" r="7" />
        <circle cx="35" cy="36" fill="#FFFFFF" r="7" />
      </g>
    </svg>
  );
}

export default CardIcon2;
