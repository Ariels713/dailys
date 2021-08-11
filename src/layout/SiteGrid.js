import styled from "styled-components";
import Alerter from "../components/Alert/Alterer";
import IconContainer from "../components/Alert/Cards/tailwindCards/IconContainer";

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function SiteGrid({ children }) {
  return (
    <>
      <Grid>
        {children}
        <IconContainer />
        <Alerter>One A day, Until I get Paid</Alerter>
      </Grid>
    </>
  );
}

export default SiteGrid;
