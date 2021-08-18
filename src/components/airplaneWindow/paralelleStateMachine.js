import { createMachine } from "xstate";

export const paralelleStateMachine = createMachine({
  id: "paralelleStateMachine",
  type: "parallel",
  states: {
    stable: {
      initial: "stable",
      states: {
        stable: {
          on: {
            TURBULANCE: { target: "turbulance" },
          },
        },
        turbulance: {
          after: {
            300: { target: "stable" },
          },
        },
      },
    },
    time: {
      initial: "daytime",
      states: {
        daytime: {
          on: {
            DUSK: { target: "dusk" },
            NIGHT: { target: "night" },
          },
        },
        dusk: {
          on: {
            DAYTIME: { target: "daytime" },
            NIGHT: { target: "night" },
          },
        },
        night: {
          on: {
            DAYTIME: { target: "daytime" },
            DUSK: { target: "dusk" },
          },
        },
      },
    },
  },
});
