import { createStore, combineReducers } from "redux";
import buyCakeReducer from "../reducers/buyCakeReducer.js";
import buyBookReducer from "../reducers/buyBookReducer.js";
import todoReducer from "../async-actions-noredux/reducer.js";

const rootReducers = combineReducers({
  cake: buyCakeReducer,
  book: buyBookReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducers);
