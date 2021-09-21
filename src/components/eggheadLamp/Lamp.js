import { useMachine } from "@xstate/react";
import { lightMachine } from "./lightMachine";
import LightSvg from "./LightSVG";
import LightSwitchIcon from "./LightSwitchIcon";
import GridItem from "../../layout/GridItem";
import styled from "styled-components";

import Interactive from "../../layout/InteractiveIcon";

const LampWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
`;

const LampSVG = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 400px;

  &[data-state="lightOn"] {
    filter: ${(props) => props.dropShadow};
  }
`;

const LightBeam = styled.div`
  &[data-state="lightOn"]:before {
    content: "";
    position: absolute;
    top: 280px;
    left: 25%;
    width: 200px;
    height: 50px;
    background: ${(props) => props.beamBrightness};
    transform: perspective(200px) rotateX(0deg) scale(1.2, 0.5);
    filter: blur(28px);
  }
`;

const LightSwitch = styled.div`
  cursor: pointer;
`;

const Range = styled.input`
  width: 100%;
  margin: 0px;
  margin-left: -27px;
  padding: 8px 0px;
  outline: none;
  background-color: transparent;
  -webkit-appearance: none;

  &[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: hsla(110, 0%, 80%, 1);
    border-radius: 7px;
    cursor: pointer;
  }

  &[type="range"]::-webkit-slider-thumb {
    height: 18px;
    width: 18px;
    margin-top: -7px;
    background: ${(props) => props.thumbColor};
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;

const ColorCircleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  margin-left: -42px;
  margin-top: 16px;
`;

const Circles = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border:none;
  transition: all 0.2s ease-in-out;
    &:hover {

    transform: scale(1.2)
  }
  }
`;

function Lamp() {
  const [current, send] = useMachine(lightMachine, { devTools: true });
  const { rangeValue } = current.context;
  const { colorValue } = current.context;

  return (
    <>
      <GridItem
        backgroundColor="hsla(40, 36%, 9%, 1.00)"
        link="https://codesandbox.io/s/eloquent-galois-o7rc2?file=/src/Lamp.js"
      >
      <Interactive />
        <LampWrapper>
          <LampSVG
            data-state={current.value.lightSwitch}
            dropShadow={`drop-shadow(0px 5px 10px hsla(${colorValue}, .${rangeValue}))`}
          >
            <LightBeam
              beamBrightness={`hsla(${colorValue}, .${rangeValue})`}
              data-state={current.value.lightSwitch}
            >
              {current.matches({ lightSwitch: "lightOff" }) && <LightSvg />}
              {current.matches({ lightSwitch: "lightOn" }) && (
                <LightSvg lightColor={`hsla(${colorValue}, 1.00)`} />
              )}
            </LightBeam>
          </LampSVG>
          <LightSwitch onClick={() => send({ type: "TOGGLE" })}>
            {current.matches({ lightSwitch: "lightOff" }) && (
              <LightSwitchIcon />
            )}
            {current.matches({ lightSwitch: "lightOn" }) && (
              <LightSwitchIcon
                topColor="hsla(140, 56%, 52%, 1.00)"
                bottomColor="hsla(140, 56%, 32%, 1.00)"
              />
            )}
          </LightSwitch>
          <div>
            <Range
              thumbColor={`hsla(${colorValue}, 1.00)`}
              type="range"
              className="brigtness"
              name="brightness"
              min="0"
              max="99"
              value={rangeValue}
              onChange={(e) => send("CHANGE", { value: e.target.value })}
            />
            {/* 
            <label htmlFor="brightness">Brightness{rangeValue}</label> */}
          </div>
        </LampWrapper>
        <ColorCircleWrapper>
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "359, 94%, 62%" })}
            color="hsla(359, 94%, 62%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "21, 89%, 56%" })}
            color="hsla(21, 89%, 56%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "33, 94%, 55%" })}
            color="hsla(33, 94%, 55%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "20, 94%, 63%" })}
            color="hsla(20, 94%, 63%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "42, 93%, 64%" })}
            color="hsla(42, 93%, 64%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "94, 38%, 59%" })}
            color="hsla(94, 38%, 59%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "162, 44%, 46%" })}
            color="hsla(162, 44%, 46%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "178, 30%, 43%" })}
            color="hsla(178, 30%, 43%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "208, 25%, 45%" })}
            color="hsla(208, 25%, 45%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "198, 62%, 39%" })}
            color="hsla(198, 62%, 39%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "181, 90%, 31%" })}
            color="hsla(181, 90%, 31%, 1.00)"
          />
          <Circles
            onClick={() => send("CHANGE_LIGHT", { value: "159, 41%, 70%" })}
            color="hsla(159, 41%, 70%, 1.00)"
          />
        </ColorCircleWrapper>
      </GridItem>
    </>
  );
}

export default Lamp;
