import styled from "styled-components";

const GridItemDiv = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "hsl(30, 100%, 99%)"};
`;

function GridItem({ children, backgroundColor }) {
  return (
    <GridItemDiv backgroundColor={backgroundColor}>{children}</GridItemDiv>
  );
}

export default GridItem;
