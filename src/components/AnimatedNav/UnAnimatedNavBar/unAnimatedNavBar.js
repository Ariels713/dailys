import { useState } from "react";
import styled from "styled-components";

import ToasterLogo from "../ToasterLogo";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 600px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 500;
`;

const NavElement = styled.nav`
  display: flex;
`;

const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  padding: 0;
  list-style: none;
  padding: 1rem;

  &:nth-of-type(n + 1) {
    margin-left: 1rem;
  }
`;

const Anchor = styled.a`
  color: hsla(319, 7%, 13%, 1);
  text-decoration: none;
  cursor: pointer;

  &[data-state="products"] {
    border-bottom: solid hsla(201, 64%, 55%, 1) 4px;
  }
  &[data-state="community"] {
    border-bottom: solid hsla(201, 64%, 55%, 1) 4px;
  }
  &[data-state="pricing"] {
    border-bottom: solid hsla(201, 64%, 55%, 1) 4px;
  }
  &[data-state="contact"] {
    border-bottom: solid hsla(201, 64%, 55%, 1) 4px;
  }
`;

const ToasterLogoWrapper = styled.div`
  padding: 1rem;
`;

function UnAnimatedNavBar() {
  const [underLine, setUnderline] = useState("");
  function getInnerText(e) {
    return e.target.innerText.toLowerCase();
  }
  return (
    <>
      <NavigationWrapper>
        <ToasterLogoWrapper>
          <ToasterLogo />
        </ToasterLogoWrapper>
        <NavElement>
          <UnorderedList>
            <ListItem>
              <Anchor
                data-state={underLine === "products" && "products"}
                onClick={(e) => setUnderline(getInnerText(e))}
              >
                Products
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                data-state={underLine === "community" && "community"}
                onClick={(e) => setUnderline(getInnerText(e))}
              >
                Community
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                data-state={underLine === "pricing" && "pricing"}
                onClick={(e) => setUnderline(getInnerText(e))}
              >
                Pricing
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                data-state={underLine === "contact" && "contact"}
                onClick={(e) => setUnderline(getInnerText(e))}
              >
                Contact
              </Anchor>
            </ListItem>
          </UnorderedList>
        </NavElement>
      </NavigationWrapper>
    </>
  );
}

export default UnAnimatedNavBar;
