import styled from "styled-components";

const MoveIconToCorner = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

function Interactive(props) {
  const title = props.title || "Interactive";

  return (
    <MoveIconToCorner>
      <svg
        height="48"
        width="48"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title}</title>
        <g>
          <path
            d="M19.5,25C12.60742,25,7,19.39258,7,12.5S12.60742,0,19.5,0S32,5.60742,32,12.5S26.39258,25,19.5,25z M19.5,2 C13.71045,2,9,6.71045,9,12.5S13.71045,23,19.5,23S30,18.28955,30,12.5S25.28955,2,19.5,2z"
            fill="#BADEFC"
          />
          <path
            d="M19.5,20c-4.13574,0-7.5-3.36426-7.5-7.5S15.36426,5,19.5,5S27,8.36426,27,12.5S23.63574,20,19.5,20z M19.5,7C16.46729,7,14,9.46729,14,12.5s2.46729,5.5,5.5,5.5s5.5-2.46729,5.5-5.5S22.53271,7,19.5,7z"
            fill="#43A6DD"
          />
          <path
            d="M35.00476,48C35.73767,44.71313,38,34.07611,38,28c0-1.03125-0.96173-2-2.14813-2 c-0.99066,0-1.81622,0.62775-2.06427,1.47687C33.74982,26.10382,32.54846,25,31.06451,25h-0.09198 c-1.17682,0-2.17084,0.69696-2.55457,1.66876c0,0-0.10547-2.66876-2.72717-2.66876h-0.08527C24.3222,24,23.20245,24.69879,23,26 V13.5c0-1.93298-1.56702-3.5-3.5-3.5S16,11.56702,16,13.5V29h-4.85187C9.96173,29,9,29.89539,9,31v8 c0,3.19385,4.45959,5.61029,5.24194,9H35.00476z"
            fill="#EEBC99"
          />
          <path
            d="M15,35L15,35c-0.55229,0-1-0.44772-1-1v-5h2v5C16,34.55228,15.55229,35,15,35z"
            fill="#CE9C7A"
          />
        </g>
      </svg>
    </MoveIconToCorner>
  );
}

export default Interactive;