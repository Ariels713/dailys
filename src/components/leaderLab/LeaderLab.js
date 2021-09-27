import { useRef } from "react";
import styled from "styled-components";
import { labLeaderMachine } from "./leaderLabMachine";
import PencilSVG from "./PencilSVG";
import BeakerSVG from "./BeakerSVG";
import LightBulb from "./LightBulb";
import { useMachine } from "@xstate/react";
import GridItem from "../../layout/GridItem";
import Interactive from "../../layout/InteractiveIcon";
const BookWrapper = styled.div`
  position: relative;
  max-width: 50ch;
  background-color: hsla(185, 97%, 38%, 1);
  --font: "Inter", sans-serif;
  --font-Color-secondary: hsla(95, 100%, 100%, 1);
  --accent-color: hsla(58, 67%, 62%, 1);
  --text-color: hsla(304, 7%, 25%, 1);
  --transitions: transform 1s ease-out;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const SubTitleWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  width: fit-content;
  max-width: 40ch;
  padding: 0;
  padding-top: 1rem;
  padding-left: 2.5rem;
  margin-bottom: 3ch;
  color: var(--text-color);
`;

const LeaderLabSubTitle = styled.h2`
  text-align: left;
  letter-spacing: 2px;
  font-family: var(--font);
  padding-left: 0.5ch;
`;
const LeaderLabSubTitleSpan = styled.span`
  display: inline-block;
  color: var(--font-Color-secondary);
  font-style: italic;
`;

const LeaderLabTitleWrapper = styled.div`
  width: min-content;
  padding-left: 2.5rem;
  font-size: 2.5rem;
  margin-top: -1ch;
`;

const LeaderLabTitle = styled.h1`
  display: inline-block;
  margin: 0;
  text-align: left;
  text-transform: uppercase;
  font-weight: 900;
  font-family: var(--font);
  color: var(--font-Color-secondary);
`;

const LeaderLabAuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeaderLabAuthors = styled.h3`
  margin: 0;
  text-align: left;
  padding-left: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 0.5ch;
`;

const LeaderLabAuthorDesc = styled.h4`
  margin: 0;
  text-align: left;
  padding-left: 2.5rem;
  margin-bottom: 4ch;
  color: var(--text-color);
`;

const LeaderLabPencil = styled.div`
  position: absolute;
  top: 93px;
  left: 170px;
`;

const LeaderLabBeaker = styled.div`
  display: flex;
  margin: 0;
  margin-left: 2.5rem;
  padding-bottom: 20px;
`;

const LeaderLabLightBulb = styled.div`
  position: absolute;
  top: 207px;
  left: 223px;
`;

const AnimatedDiv1Wrapper = styled.div`
  position: relative;
  width: 159px;
  height: 10px;
  top: 85px;
  left: 43px;
  overflow: hidden;
`;
const AnimatedDiv1 = styled.div`
  position: absolute;
  left: -159px;
  width: 100%;
  height: 10px;
  background-color: var(--accent-color);
  transition: var(--transitions);
  transform: ${(props) => `translateX(${props.translateX}px)`};
`;

const AnimatedDiv2Wrapper = styled.div`
  position: relative;
  width: 319px;
  height: 10px;
  top: 172px;
  left: 43px;
  overflow: hidden;
`;
const AnimatedDiv2 = styled.div`
  position: absolute;
  left: -320px;
  width: 100%;
  height: 10px;
  background-color: var(--accent-color);
  transition: var(--transitions);
  transform: ${(props) => `translateX(${props.translateX}px)`};
`;

const AnimatedDiv3Wrapper = styled.div`
  position: relative;
  width: 159px;
  height: 10px;
  top: 259px;
  left: 43px;
  overflow: hidden;
`;
const AnimatedDiv3 = styled.div`
  position: absolute;
  left: -160px;
  width: 100%;
  height: 10px;
  background-color: var(--accent-color);
  transition: var(--transitions);
  transform: ${(props) => `translateX(${props.translateX}px)`};
`;
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 34px;
  right: 12px;
`;

const LeaderLabButton = styled.button`
  background-color: #ffffff;
  border: 0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-decoration: none #d1d5db solid;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: rgb(249, 250, 251);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:focus-visible {
    box-shadow: none;
  }
`;

function LeaderLab() {
  // Statemachine Hook
  const [current, send] = useMachine(labLeaderMachine);
  //  Get computed values for animated2.
  const animatedRef = useRef();

  return (
    <GridItem
      backgroundColor="hsla(185, 96%, 38%, .50)"
      link="https://codesandbox.io/s/compassionate-cherry-9tl0n?file=/src/leader_lab/BeakerSVG.js:0-6717"
    >
      <Interactive />
      <BookWrapper className="main wrapper">
        <SubTitleWrapper className="subtitle wrapper">
          {/* Subtitle wrapper and subtitle */}
          <LeaderLabSubTitle>
            Core Skills to Become a Great Manager,{" "}
            <LeaderLabSubTitleSpan>Faster</LeaderLabSubTitleSpan>
          </LeaderLabSubTitle>
        </SubTitleWrapper>
        {/* SVG Pencil */}
        <LeaderLabPencil>
          <PencilSVG />
        </LeaderLabPencil>
        {/* Light bulb, color passed in via pros is accent color */}
        <LeaderLabLightBulb>
          <LightBulb accentColor={current.context.lightBulbColor} />
        </LeaderLabLightBulb>
        <AnimatedDiv1Wrapper>
          {/* Border animation for "The" */}
          <AnimatedDiv1 translateX={current.context.translateTHE} />
        </AnimatedDiv1Wrapper>
        {/* Border animation for "Leader" */}
        <AnimatedDiv2Wrapper>
          <AnimatedDiv2
            ref={animatedRef}
            translateX={current.context.translateLEADER}
          />
        </AnimatedDiv2Wrapper>
        {/* Border animtion for "Lab" */}
        <AnimatedDiv3Wrapper>
          <AnimatedDiv3 translateX={current.context.translateLAB} />
        </AnimatedDiv3Wrapper>
        {/* Book Title */}
        <LeaderLabTitleWrapper>
          <LeaderLabTitle>The Leader Lab</LeaderLabTitle>
        </LeaderLabTitleWrapper>
        <LeaderLabBeaker>
          <BeakerSVG animationState={current.context.animationPlayState} />
        </LeaderLabBeaker>
        <LeaderLabAuthorWrapper className="author">
          <LeaderLabAuthors>Tania Luna</LeaderLabAuthors>
          <LeaderLabAuthors>LeeAnn Renninger, Phd</LeaderLabAuthors>
          <LeaderLabAuthorDesc>
            Co-Founders of LifeLabs Learning
          </LeaderLabAuthorDesc>
        </LeaderLabAuthorWrapper>
        <ButtonWrapper>
          {current.matches("animate") && (
            <LeaderLabButton onClick={(event) => send("ANIMATE")}>
              Animate
            </LeaderLabButton>
          )}
          {current.matches("animatedLab") && (
            <LeaderLabButton onClick={(event) => send("ANIMATE")}>
              Rewind
            </LeaderLabButton>
          )}
        </ButtonWrapper>
      </BookWrapper>
    </GridItem>
  );
}

export default LeaderLab;
