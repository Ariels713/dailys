import { createMachine, assign } from "xstate";

export const animatedNavBarMachine = createMachine({
  id: "navMachine",
  initial: "idle",
  context: {
    translateX: null,
    scaleX: null
  },
  states: {
    idle: {
      on: {
        PRODUCTS: {
          target: "products",
          actions: assign({ translateX: -382, scaleX: 6.3 })
        },
        COMMUNITY: {
          target: "community",
          actions: assign({ translateX: -261, scaleX: 8.0 })
        },
        PRICING: {
          target: "pricing",
          actions: assign({ translateX: -148, scaleX: 4.9 })
        },
        CONTACT: {
          target: "contact",
          actions: assign({ translateX: -48, scaleX: 5.3 })
        }
      }
    },
    products: {
      on: {
        COMMUNITY: {
          target: "community",
          actions: assign({ translateX: -261, scaleX: 8.0 })
        },
        PRICING: {
          target: "pricing",
          actions: assign({ translateX: -148, scaleX: 4.9 })
        },
        CONTACT: {
          target: "contact",
          actions: assign({ translateX: -48, scaleX: 5.3 })
        }
      }
    },
    community: {
      on: {
        PRODUCTS: {
          target: "products",
          actions: assign({ translateX: -382, scaleX: 6.3 })
        },
        PRICING: {
          target: "pricing",
          actions: assign({ translateX: -148, scaleX: 4.9 })
        },
        CONTACT: {
          target: "contact",
          actions: assign({ translateX: -48, scaleX: 5.3 })
        }
      }
    },
    pricing: {
      on: {
        PRODUCTS: {
          target: "products",
          actions: assign({ translateX: -382, scaleX: 6.3 })
        },
        COMMUNITY: {
          target: "community",
          actions: assign({ translateX: -261, scaleX: 8.0 })
        },
        CONTACT: {
          target: "contact",
          actions: assign({ translateX: -48, scaleX: 5.3 })
        }
      }
    },
    contact: {
      on: {
        PRODUCTS: {
          target: "products",
          actions: assign({ translateX: -382, scaleX: 6.3 })
        },
        COMMUNITY: {
          target: "community",
          actions: assign({ translateX: -261, scaleX: 8.0 })
        },
        PRICING: {
          target: "pricing",
          actions: assign({ translateX: -148, scaleX: 4.9 })
        }
      }
    }
  }
});
