import styled from "styled-components";
import CardIcon from "./CardIcon";
import CardIcon2 from "./CardIcon2";
import CardIcon3 from "./CardIcon3";
import GridItem from "../../../../layout/GridItem";
const Container = styled.div`
  width: 250px;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.02rem;
  background-color: white;
  margin: 0 1rem;
`;

const VersionIcon = styled.div`
  align-self: flex-end;
  background-color: hsl(288, 97%, 95%);
  border-radius: 1rem;
  font-size: 0.75rem;
  text-align: center;
  color: hsl(293, 67%, 61%);
  margin-right: 8px;
  margin-top: 8px;
  padding: 3px 8px;
`;

const Children = styled.p`
  padding-bottom: 0.75rem;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

function IconContainer({ children }) {
  return (
    <>
      <GridItem backgroundColor="hsl(173, 71%, 35%)">
        <Wrapper>
          <Container>
            <VersionIcon>2.0+</VersionIcon>
            <CardIcon />
            <Children>Shareable Presets</Children>
          </Container>
          <Container>
            <VersionIcon>2.0+</VersionIcon>
            <CardIcon2 />
            <Children>Dark Mode</Children>
          </Container>
          <Container>
            <VersionIcon>2.0+</VersionIcon>
            <CardIcon3 />
            <Children>Gradients</Children>
          </Container>
        </Wrapper>
      </GridItem>
    </>
  );
}

export default IconContainer;
