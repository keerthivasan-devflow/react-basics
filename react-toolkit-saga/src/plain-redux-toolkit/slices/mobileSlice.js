import { createSlice } from "@reduxjs/toolkit";

const mobileSlice = createSlice({
  name: "Mobile Application",
  initialState: {
    numberOfMobiles: 45,
  },
  reducers: {
    orderMobile: (state) => {
      state.numberOfMobiles += 1;
    },
    restockMobile: (state, action) => {
      state.numberOfMobiles += action.payload;
    },
  },
});

export default mobileSlice.reducer;
export const mobileActions = mobileSlice.actions;
