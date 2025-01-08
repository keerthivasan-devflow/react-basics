const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const reduxLogger = require("redux-logger")
let logger = reduxLogger.createLogger()
let applyeMiddleware = redux.applyMiddleware

const BUY_PEN = "BUY_PEN";
const BUY_BOOKS = "BUY_BOOKS";
let initialPenState = {
  numberOfPens: 50,
};

let initialBookState = {
  numberOfBooks: 1000,
};

function buyPen(qty = 1) {
  return {
    type: BUY_PEN,
    payload: qty,
  };
}

function buyBooks() {
  return {
    type: BUY_BOOKS,
  };
}

const penReducer = (state = initialPenState, action) => {
  switch (action.type) {
    case BUY_PEN:
      return {
        ...state,
        numberOfPens: state.numberOfPens - action.payload,
      };
    default:
      return state;
  }
};

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case BUY_BOOKS:
      return { ...state, numberOfBooks: state.numberOfBooks - 100 };
    default:
      return state;
  }
};

const penReducer2 = (state = initialPenState, action) => {
  const reducers = {
    BUY_PEN: () => {
      return {
        ...state,
        numberOfPens: state.numberOfPens - 5,
      };
    },
  };
  console.log("reducers[action.type]: ", reducers[action.type]);
  if (reducers[action.type]) {
    return reducers.BUY_PEN();
  } else {
    return state;
  }
};

let rootReducers = combineReducers({
  penReducer,
  bookReducer,
});
let store = createStore(rootReducers, applyeMiddleware(logger));

// store.replaceReducer(penReducer2);
// console.log("Store: ", store);

// console.log("initial state of pens: ", store.getState().penReducer);
// console.log("initial state of books: ", store.getState().bookReducer);

const unsubscribe = store.subscribe(() => {
  // console.log("Updated state of pens: ", store.getState().penReducer);
  // console.log("Updated state of books: ", store.getState().bookReducer);
});

store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen(3));

store.dispatch(buyBooks());
store.dispatch(buyBooks());

unsubscribe();
