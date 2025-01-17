import { BUY_CAKE } from "../actions/buyCake.js";

const initialState = {
  numberOfCakes: 80,
};

export const buyCakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};
