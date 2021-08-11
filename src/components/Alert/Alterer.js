import styled from "styled-components";
import AlertIcon from "./AlertIcon";
import GridItem from "../../layout/GridItem";
const Alert = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  /*Height is only for demo purposes*/
  height: 65px;
  background-color: ${(props) => props.primaryColor || "hsl(192, 71%, 82%)"};
  margin: 10px auto;
  border-left: solid 5px
    ${(props) => props.secondaryColor || "hsl(192, 71%, 32%)"};
  border-radius: 3px 5px 5px 0;
  padding-right: 10px;
  padding-left: 10px;
  min-width: 300px;
`;

const Children = styled.p`
  color: ${(props) => props.secondaryColor || "hsl(192, 71%, 32%)"};
  text-align: left;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Alerter({ children, primaryColor, secondaryColor }) {
  return (
    <>
      <GridItem
        backgroundColor="hsl(354, 100%, 71%)"
        link="https://codesandbox.io/s/beautiful-sound-bpv7b"
      >
        <Wrapper>
          <Alert primaryColor={primaryColor} secondaryColor={secondaryColor}>
            <Children secondaryColor={secondaryColor}>{children}</Children>
            <AlertIcon iconColor={secondaryColor} />
          </Alert>
          <Alert
            primaryColor="hsl(55, 100%, 50%)"
            secondaryColor="hsl(55, 100%, 30%)"
          >
            <Children secondaryColor="hsl(55, 100%, 30%)">{children}</Children>
            <AlertIcon iconColor="hsl(55, 100%, 30%)" />
          </Alert>
          <Alert
            primaryColor="hsl(258, 68%, 81%)"
            secondaryColor="hsl(258, 68%, 40%)"
          >
            <Children secondaryColor="hsl(258, 68%, 40%)">{children}</Children>
            <AlertIcon iconColor="hsl(258, 68%, 40%)" />
          </Alert>
        </Wrapper>
      </GridItem>
    </>
  );
}
export default Alerter;
