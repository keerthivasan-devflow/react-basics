import { BUY_BOOK } from "../actions/buyBook.js";

const books = {
  numberOfBooks: 250,
};

const buyBookReducer = (state = books, action) => {
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

export default buyBookReducer