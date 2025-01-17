import { BUY_BOOK } from "../actions/buyBook.js";

const initialState = {
  numberOfBooks: 250,
};
export const buyBookReducer = (state = initialState, action) => {
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
