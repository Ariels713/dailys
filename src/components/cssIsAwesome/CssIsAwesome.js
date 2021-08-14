import { useMachine } from "@xstate/react";
import toggleMachine from "./toggleMachine";
import "./CssIsAseome.css";
import GridItem from "../../layout/GridItem";
import Interactive from "../../layout/InteractiveIcon";
function CssIsAwesome() {
  const [current, send] = useMachine(toggleMachine);
  return (
    <GridItem
      backgroundColor="hsl(71, 100%, 96%)"
      link="https://codesandbox.io/s/css-is-awesome-nxs21?file=/src/CssIsAwesome.js:0-597"
    >
      <Interactive />
      <button className="toggle__label" onClick={() => send("TOGGLE")}>
        <strong>{current.value}</strong> sizing
      </button>
      <main>
        <div className="wrapper">
          <article className="arti bucco">
            <p className="awesome" data-state={current.value}>
              CSS is awesome
            </p>
          </article>
        </div>
      </main>
    </GridItem>
  );
}

export default CssIsAwesome;
