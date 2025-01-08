// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga.js"; // Import your root saga
import sagaReducer from "./sagaSlice.js";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store with Redux Toolkit's configureStore method
export const sagaStore = configureStore({
  reducer: {
    data: sagaReducer, // Add your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Add sagaMiddleware to default middleware
});

// Run the rootSaga (start watching for dispatched actions)
sagaMiddleware.run(rootSaga);

console.log("Initial State: ", sagaStore.getState());
sagaStore.dispatch({ type: "data/fetchDataRequested" });
sagaStore.subscribe(() => console.log("Updated State: ", sagaStore.getState()));
