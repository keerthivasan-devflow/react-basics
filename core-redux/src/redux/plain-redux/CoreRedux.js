import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import { produce } from "immer";

const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_BOOK = "BUY_BOOK";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";

const initialCakeState = {
  numberOfCakes: 800,
};

const initialAddressState = {
  street: "New Colony Street",
  city: "Chennai",
  locality: {
    landmark: "ECET Biryani",
    zipcode: 566003,
  },
};

const initialBookState = {
  numberOfBooks: 100,
};

function buyCake(qty = 2) {
  return {
    type: BUY_CAKE,
    payload: qty,
  };
}

function buyBook(qty = 2) {
  return {
    type: BUY_BOOK,
    payload: qty,
  };
}

function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address,
  };
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    }
    default:
      return state;
  }
};

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case BUY_BOOK: {
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - action.payload,
      };
    }
    default:
      return state;
  }
};

const addressReducer = (state = initialAddressState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS: {
      // return {
      //   ...state,
      //   locality: {
      //     ...state.locality,
      //     landmark: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.locality.landmark = "Hotel Grand Palace";
      });
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  book: bookReducer,
  address: addressReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootReducer);
console.log("Initial State: ", store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake(10));
store.dispatch(buyCake(5));

store.dispatch(buyBook());
store.dispatch(buyBook(10));
store.dispatch(buyBook(5));
store.dispatch(updateAddress("Periyasamy Tower"));
unsubscribe();
