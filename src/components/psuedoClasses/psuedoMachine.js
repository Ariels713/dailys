import { createMachine } from "xstate";
export const psuedoMachine = createMachine({
  id: "psuedoMachine",
  type: "parallel",
  states: {
    // start of before
    before: {
      initial: "hidden",
      states: {
        hidden: {
          on: {
            TOGGLE_BEFORE: { target: "visable" },
          },
        },
        visable: {
          on: {
            TOGGLE_BEFORE: { target: "hidden" },
          },
        },
      },
    },
    // end of before
    // start of After
    after: {
      initial: "hidden",
      states: {
        hidden: {
          on: {
            TOGGLE_AFTER: { target: "visable" },
          },
        },
        visable: {
          on: {
            TOGGLE_AFTER: { target: "hidden" },
          },
        },
      },
    },
    // end of After
    // Start of selection
    selection: {
      initial: "hidden",
      states: {
        hidden: {
          on: {
            TOGGLE_SELECTION: { target: "visable" },
          },
        },
        visable: {
          on: {
            TOGGLE_SELECTION: { target: "hidden" },
          },
        },
      },
    },
    // end of Selection
    //start of firstLine
    firstLine: {
      initial: "hidden",
      states: {
        hidden: {
          on: {
            TOGGLE_FIRST_LINE: { target: "visable" },
          },
        },
        visable: {
          on: {
            TOGGLE_FIRST_LINE: { target: "hidden" },
          },
        },
      },
    },
    //end of firstLine
  },
});
