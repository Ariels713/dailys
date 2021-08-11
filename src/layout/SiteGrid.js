import styled from "styled-components";
import Boombox from "../components/boombox/BoomBox";
import IconContainer from "../components/tailwindCards/IconContainer";
import Alerter from "../components/alert/Alterer";
const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function SiteGrid({ children }) {
  return (
    <>
      <Grid>
        {children}
        <IconContainer />
        <Alerter>One A day, Until I get Paid</Alerter>
      </Grid>

      <Grid>
        {children}
        <Boombox />
      </Grid>
    </>
  );
}

export default SiteGrid;
