import { BUY_CAKE } from "../actions/buyCake.js";

const cakes = {
  numberOfCakes: 80,
};

const buyCakeReducer = (state = cakes, action) => {
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

export default buyCakeReducer