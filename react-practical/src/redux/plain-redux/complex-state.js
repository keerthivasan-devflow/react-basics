const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

const STREET_UPDATE = "STREET_UPDATE";

function streetUpdate(street) {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
}

let initialState = {
  firstname: "Keerthivasan",
  age: 26,
  address: {
    street: "MGR street",
    city: "Chennai",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = "Balaji street";
      });
    default:
      return state;
  }
};

let store = createStore(reducer);
console.log("Initial state: ", store.getState());
let unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(streetUpdate("Mariyamman Kovil street"));
unsubscribe();
