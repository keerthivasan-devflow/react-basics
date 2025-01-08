import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cakeSlice";
import userReducer from "../features/asyncSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    users: userReducer,
  },
});