import { createSlice } from "@reduxjs/toolkit";

const initialCakeState = {
  numberOfCakes: 95,
};

const cakeSlice = createSlice({
  name: "Cake Application",
  initialState: initialCakeState,
  reducers: {
    orderCake: (state) => {
      state.numberOfCakes--;
    },
    restockCake: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
// export const { orderCake, restockCake } = cakeSlice.actions;
export const cakeActions = cakeSlice.actions
