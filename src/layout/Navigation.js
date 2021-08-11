import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
`;
const NavItems = styled.p`
  font-weight: 700;
  font-size: 2rem;
`;
function Navigation() {
  return (
    <NavWrapper>
      <NavItems>One a day, until it pays.</NavItems>
    </NavWrapper>
  );
}

export default Navigation;
