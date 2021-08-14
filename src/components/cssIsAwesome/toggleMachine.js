import { createMachine } from "xstate";

const toggleMachine = createMachine({
  id: "toggleMachine",
  initial: "extrinsic",
  states: {
    extrinsic: {
      on: {
        TOGGLE: "intrinsic",
      },
    },
    intrinsic: {
      on: {
        TOGGLE: "extrinsic",
      },
    },
  },
});

export default toggleMachine;
