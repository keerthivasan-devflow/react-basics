import { configureStore } from "@reduxjs/toolkit";
import cakeReducer, { orderCake, restockCake } from "../slices/cakeSlice.js";
import bookReducer, { orderBook } from "../slices/bookSlice.js";
import userReducer from "../slices/asyncSlice.js";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    book: bookReducer,
    users: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


// Debugging Purpose Only
// console.log("Initial State : ", store.getState());
// store.subscribe(() => console.log("Updated State: ", store.getState()));
// store.subscribe(() => console.log({}));

store.dispatch(orderCake(5));
store.dispatch(orderCake(10));
store.dispatch(restockCake(100));

store.dispatch(orderBook(5));
store.dispatch(orderBook(10));
store.dispatch(orderBook(20));

store.dispatch(fetchUsers());
