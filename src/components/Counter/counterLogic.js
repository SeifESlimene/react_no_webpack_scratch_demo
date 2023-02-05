import { kea } from "kea";

export const counterLogic = kea({
  actions: {
    incrementCounter: true,
    decrementCounter: true,
    updateCounter: (newValue) => ({ newValue }),
  },
  reducers: {
    count: [
      0,
      {
        incrementCounter: (state) => state + 1,
        decrementCounter: (state) => state - 1,
        updateCounter: (_, { newValue }) => newValue,
      },
    ],
  },
});
