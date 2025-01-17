const redux = require("redux");
const reduxLogger = require("redux-logger")
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const cakeState = {
  numberOfCakes: 100,
};

const bookState = {
  numberOfBooks: 50,
};

const BUY_CAKE = "BUY_CAKE";
const BUY_BOOK = "BUY_BOOK";

const buyCake = (quantity) => {
  return {
    type: BUY_CAKE,
    info: "First redux application",
    payload: quantity,
  };
};

const buyBook = (quantity) => {
  return {
    type: BUY_BOOK,
    info: "First redux application",
    payload: quantity,
  };
};

const buyCakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    default:
      return state;
  }
};

const buyBookReducer = (state = bookState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: buyCakeReducer,
  book: buyBookReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log("Initial State: ", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log("Updated State: ", store.getState())
// );
store.dispatch(buyCake(5));
store.dispatch(buyCake(3));
store.dispatch(buyCake(1));
store.dispatch(buyBook(1));
store.dispatch(buyBook(1));

// The below code will provide more boilerplate and diffcult to manage and maintain
// store.dispatch({
//   type: BUY_CAKE,
//   info: "First redux application",
// });

// unsubscribe();
