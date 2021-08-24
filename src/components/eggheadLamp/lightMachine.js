import { createMachine, assign } from "xstate";

export const lightMachine = createMachine({
  id: "lightMachine",
  type: "parallel",
  context: {
    rangeValue: 99,
    // color: "hsla(45, 100%, 75%)",
    colorValue: "45, 100%, 75%",
  },
  states: {
    lightSwitch: {
      initial: "lightOff",
      states: {
        lightOff: {
          on: {
            TOGGLE: { target: "lightOn" },
          },
        },
        lightOn: {
          on: {
            TOGGLE: { target: "lightOff" },
          },
        },
      },
    },
    range: {
      initial: "brightness_level",
      states: {
        brightness_level: {
          on: {
            CHANGE: {
              actions: assign({
                rangeValue: (ctx, e) => e.value,
              }),
            },
          },
        },
      },
    },
    colors: {
      initial: "default_color",
      states: {
        default_color: {
          on: {
            CHANGE_LIGHT: {
              actions: assign({
                colorValue: (ctx, e) => e.value,
              }),
            },
          },
        },
      },
    },

    broken: {
      type: "final",
    },
  },
});
