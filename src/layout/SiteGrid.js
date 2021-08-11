import styled from "styled-components";
import Alerter from "../components/alert/Alterer";
import Boombox from "../components/boombox/BoomBox";
import IconContainer from "../components/tailwindCards/IconContainer";

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
        {/* <Alerter>One A day, Until I get Paid</Alerter> */}
      </Grid>

      <Grid>
        {children}
        <Boombox />
      </Grid>
    </>
  );
}

export default SiteGrid;
