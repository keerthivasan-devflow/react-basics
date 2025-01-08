import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import cakeReducer, { cakeActions } from "../slices/cakeSlice.js";
import bookReducer, { bookActions } from "../slices/bookSlice.js";
import asyncReducer, { fetchUsers } from "../slices/asyncSlice.js";

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    book: bookReducer,
    async: asyncReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

console.log("Initial State : ", store.getState());
store.subscribe(() => console.log("Updated State: ", store.getState()));

store.dispatch(cakeActions.orderCake(5));
store.dispatch(cakeActions.orderCake(10));
store.dispatch(cakeActions.orderCake(20));
store.dispatch(cakeActions.restockCake());
store.dispatch(cakeActions.restockCake());

store.dispatch(bookActions.orderBook(5));
store.dispatch(bookActions.orderBook(10));
store.dispatch(bookActions.orderBook(20));


store.dispatch(fetchUsers());