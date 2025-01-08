import { createSlice } from "@reduxjs/toolkit";

const initialCakeState = {
  numberOfCakes: 95,
};

const cakeSlice = createSlice({
  name: "Cake Application",
  initialState: initialCakeState,
  reducers: {
    orderCake: (state, action) => {
      state.numberOfCakes -= action.payload;
    },
    restockCake: (state) => {
      state.numberOfCakes += 1;
    },
  },
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;
