import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "Book Application",
  initialState: {
    numberOfBooks: 300,
  },
  reducers: {
    orderBook: (state, action) => (state.numberOfBooks += action.payload),
  },
});

export default bookSlice.reducer;
export const { orderBook } = bookSlice.actions;
