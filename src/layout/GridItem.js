import styled from "styled-components";
import CodeLink from "./CodeLink";

const GridItemDiv = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "hsl(30, 100%, 99%)"};
`;

const CodeSandboxLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 10px;
`;

function GridItem({ children, backgroundColor, link }) {
  return (
    <GridItemDiv backgroundColor={backgroundColor}>
      {children}
      <CodeSandboxLink href={link} target="_blank">
        <CodeLink />
      </CodeSandboxLink>
    </GridItemDiv>
  );
}

export default GridItem;
