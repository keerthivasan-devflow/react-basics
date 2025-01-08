import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "./cakeSlice.js";

const bookSlice = createSlice({
  name: "Book Application",
  initialState: {
    numberOfBooks: 300,
  },
  reducers: {
    orderBook: (state, action) => {
      state.numberOfBooks += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.orderCake, (state) => {
      state.numberOfBooks -= 1;
    });
  },
});

export default bookSlice.reducer;
export const bookActions = bookSlice.actions;
