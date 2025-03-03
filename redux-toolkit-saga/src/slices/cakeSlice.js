import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numberOfCakes: 95,
  },
  reducers: {
    orderCake: (state) => {
      state.numberOfCakes -= 1;
    },
    restockCake: (state, action) => {
      state.numberOfCakes += action.payload;
    },
    restoreCake: (state) => {
      state.numberOfCakes = 100;
    },
  },
});

export default cakeSlice.reducer;
export const { orderCake, restockCake, restoreCake } = cakeSlice.actions;
