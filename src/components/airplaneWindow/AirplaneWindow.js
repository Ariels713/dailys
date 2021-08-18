import "./airPlaneStyles.css";
import { paralelleStateMachine } from "./paralelleStateMachine";
import { useMachine } from "@xstate/react";
import Daytime from "./Daytime";
import Dusk from "./Dusk";
import Night from "./Night";
import TurbulanceButton from "./buttons/TurbulanceButton";
import DaytimeButton from "./buttons/DaytimeButton";
import DuskButton from "./buttons/DuskButton";
import NightButton from "./buttons/NightButton";
import GridItem from "../../layout/GridItem";
function AirplaneWindow() {
  const [state, send] = useMachine(paralelleStateMachine);

  return (
    <>
      <GridItem
        backgroundColor="hsl(42, 93%, 64%)"
        link="https://codesandbox.io/s/busy-khayyam-hzr0d?file=/src/paralelleStateMachine.js:0-919"
      >
        <div
          className="airplaneWrapper airplaneWrapper"
          data-state={state.value.stable}
        >
          <div className="airplane_toggle">
            <button
              className="airplane_button"
              onClick={() => send("TURBULANCE")}
            >
              <TurbulanceButton />
            </button>
            <button className="airplane_button" onClick={() => send("DAYTIME")}>
              <DaytimeButton />
            </button>
            <button className="airplane_button" onClick={() => send("DUSK")}>
              <DuskButton />
            </button>
            <button className="airplane_button" onClick={() => send("NIGHT")}>
              <NightButton />
            </button>
          </div>
          <div
            className="glass"
            data-state={state.value.stable}
            data-flightTime={state.value.time}
          >
            <div className="clouds">
              {state.matches({ time: "daytime" }) && <Daytime />}
              {state.matches({ time: "dusk" }) && <Dusk />}
              {state.matches({ time: "night" }) && <Night />}
              <div className="shade">
                <div className="handle">
                  <div className="frame"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridItem>
    </>
  );
}

export default AirplaneWindow;
