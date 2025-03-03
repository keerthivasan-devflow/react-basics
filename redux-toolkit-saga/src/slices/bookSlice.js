import { createSlice } from "@reduxjs/toolkit";
import { orderCake } from "./cakeSlice.js";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    numberOfBooks: 300,
  },
  reducers: {
    orderBook: (state, action) => {
      state.numberOfBooks -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderCake, (state) => {
      state.numberOfBooks -= 1;
    });
  },
});

export default bookSlice.reducer;
export const { orderBook } = bookSlice.actions;
