import "./psuedoStyles.css";
import { useMachine } from "@xstate/react";
import GridItem from "../../layout/GridItem";
import Interactive from "../../layout/InteractiveIcon";
import { psuedoMachine } from "./psuedoMachine";
import Twitter from "./Twitter";
function PseudoElement() {
  const [state, send] = useMachine(psuedoMachine);

  return (
    <>
      <GridItem
        backgroundColor="linear-gradient(
    160deg,
    hsla(42, 69%, 81%, 1),
    hsla(186, 64%, 64%, 1)
  );"
        link="https://codesandbox.io/s/dank-cookies-gph0d?file=/src/styles.css:193-280"
      >
        <Interactive />
        <div className="psuedo_wrapper">
          <article className="intro">
            <code className="ariel">@Ariel_Rodriguez</code>

            <Twitter />
          </article>

          <div className="card">
            <div className="paper_stack">
              <div className="paper_1"></div>
              <div className="paper_2"></div>
              <div className="paper_3"></div>
              <div className="paper_4"></div>
            </div>
            <figure className="psuedoFigure">
              <blockquote
                className="before_element"
                cite="https://www.highsnobiety.com/p/25-classic-movie-speeches/"
              >
                <p
                  className="quote"
                  data-before={state.value.before}
                  data-after={state.value.after}
                  data-selection={state.value.selection}
                  data-firstLine={state.value.firstLine}
                >
                  You want the moon? Just say the word and I'll throw a lasso
                  around it and pull it down. I'll give you the moon.
                </p>
              </blockquote>
              <figcaption data-selection={state.value.selection}>
                —George Bailey & Mary Hatch,{" "}
                <cite data-selection={state.value.selection}>
                  It's a Wonderful Life
                </cite>
              </figcaption>
            </figure>
          </div>
          <div className="icon-row">
            <button
              className="psuedoButton"
              onClick={() => send("TOGGLE_BEFORE")}
            >
              ::Before
            </button>
            <button
              className="psuedoButton"
              onClick={() => send("TOGGLE_AFTER")}
            >
              ::After
            </button>
            <button
              className="psuedoButton"
              onClick={() => send("TOGGLE_SELECTION")}
            >
              ::Selection
            </button>
            <button
              className="psuedoButton"
              onClick={() => send("TOGGLE_FIRST_LINE")}
            >
              ::FirstLine
            </button>
          </div>
        </div>
      </GridItem>
    </>
  );
}

export default PseudoElement;
