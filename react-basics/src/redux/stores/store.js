import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { buyCakeReducer } from "../reducers/buyCakeReducer.js";
import { buyBookReducer } from "../reducers/buyBookReducer.js";

const rootReducers = combineReducers({
  cake: buyCakeReducer,
  book: buyBookReducer,
});


export const store = createStore(rootReducers);
