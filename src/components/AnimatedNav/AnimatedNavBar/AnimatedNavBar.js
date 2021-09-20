import { useMachine } from "@xstate/react";
import styled from "styled-components";
import ToasterLogo from '../ToasterLogo'
import { animatedNavBarMachine } from "./animatedNavBarMachine";

const AnimatedNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 600px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 500;
  margin-top: 3rem;
  overflow: hidden;
`;

const AnimatedNavElement = styled.nav`
  display: flex;
  position: relative;
`;

const AnimatedUnorderedList = styled.ul`
  display: flex;
  align-items: center;
`;

const AnimatedListItem = styled.li`
  padding: 0;
  list-style: none;
  padding: 1rem;

  &:nth-of-type(n + 1) {
    margin-left: 1rem;
  }
`;

const AnimatedAnchor = styled.a`
  color: hsla(319, 7%, 13%, 1);
  text-decoration: none;
`;

const ToasterLogoWrapper = styled.div`
  padding: 1rem;
`;

const NavigationHoverEffect = styled.div`
  width: 10px;
  height: 4px;
  background-color: hsla(201, 63%, 55%, 1);
  position: absolute;
  top: 57px;
  right: -10px;
  transition: transform 500ms ease-in-out;

  transform: ${(props) =>
    `translateX(${props.translateX}px) scaleX(${props.scaleX})`};
`;

function AnimatedNavigation() {
  const [current, send] = useMachine(animatedNavBarMachine);

  function getInnerText(e) {
    return e.target.innerText.toUpperCase();
  }
  return (
    <>
      <AnimatedNavigationWrapper>
        <ToasterLogoWrapper>
          <ToasterLogo />
        </ToasterLogoWrapper>
        <AnimatedNavElement>
          <AnimatedUnorderedList>
            <AnimatedListItem>
              <AnimatedAnchor href="#" onClick={(e) => send(getInnerText(e))}>
                Products
              </AnimatedAnchor>
            </AnimatedListItem>
            <AnimatedListItem>
              <AnimatedAnchor href="#" onClick={(e) => send(getInnerText(e))}>
                Community
              </AnimatedAnchor>
            </AnimatedListItem>
            <AnimatedListItem>
              <AnimatedAnchor href="#" onClick={(e) => send(getInnerText(e))}>
                Pricing
              </AnimatedAnchor>
            </AnimatedListItem>
            <AnimatedListItem>
              <AnimatedAnchor href="#" onClick={(e) => send(getInnerText(e))}>
                Contact
              </AnimatedAnchor>
            </AnimatedListItem>
          </AnimatedUnorderedList>
          <NavigationHoverEffect
            translateX={current.context.translateX}
            scaleX={current.context.scaleX}
          />
        </AnimatedNavElement>
      </AnimatedNavigationWrapper>
    </>
  );
}

export default AnimatedNavigation;
