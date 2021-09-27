import { createMachine, assign } from "xstate";

export const labLeaderMachine = createMachine({
  id: "labLeaderMachine",
  initial: "animate",
  context: {
    translateTHE: null,
    translateLEADER: null,
    translateLAB: null,
    lightBulbColor: "#212121",
    animationPlayState: "paused",
  },
  states: {
    animate: {
      on: {
        ANIMATE: { target: "idle" },
      },
    },
    idle: {
      after: {
        100: {
          target: "animatedThe",
          actions: assign({ animationPlayState: "running" }),
        },
      },
    },
    animatedThe: {
      entry: {},
      after: {
        400: {
          actions: assign({ translateTHE: 160 }),
          target: "animatedLeader",
        },
      },
    },
    animatedLeader: {
      after: {
        200: {
          actions: assign({
            translateLEADER: 320,
            lightBulbColor: "hsla(58, 67%, 62%, 1)",
          }),
          target: "animatedLab",
        },
      },
    },
    animatedLab: {
      after: {
        400: {
          actions: assign({ translateLAB: 160 }),
        },
      },
      on: {
        ANIMATE: {
          target: "animate",
          actions: assign({
            translateTHE: null,
            translateLEADER: null,
            translateLAB: null,
            lightBulbColor: "#212121",
            animationPlayState: "paused",
          }),
        },
      },
    },
  },
});
