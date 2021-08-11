import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 30px;
`;

function AlertIcon({ title = "delete", iconColor = "hsl(192, 71%, 30%)" }) {
  return (
    <Wrapper>
      <svg
        height="24"
        width="24"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title}</title>
        <g fill="#212121">
          <path
            d="M32,2A30,30,0,1,0,62,32,30.026,30.026,0,0,0,32,2ZM44.7,43.3a.967.967,0,0,1,0,1.4.967.967,0,0,1-1.4,0L32,33.4,20.7,44.7a.967.967,0,0,1-1.4,0,.967.967,0,0,1,0-1.4L30.6,32,19.3,20.7a.99.99,0,0,1,1.4-1.4L32,30.6,43.3,19.3a.99.99,0,1,1,1.4,1.4L33.4,32Z"
            fill={iconColor}
          />
        </g>
      </svg>
    </Wrapper>
  );
}

export default AlertIcon;
