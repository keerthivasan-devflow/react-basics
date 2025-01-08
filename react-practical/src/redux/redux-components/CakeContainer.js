import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../actions/buyCake.js";

const CakeContainer = (props) => {
  return (
    <>
      <div className="redux-container">
        <h2 className="redux-header">Cake Shop</h2>
        <p className="redux-count">
          Number of available cakes - {props.remainingCakes}
        </p>
        <button className="buy-button" onClick={props.buyCake}>
          Buy Cake
        </button>
      </div>
    </>
  );
};

// Now CakeContainer component will receive all the props passed to it. In addition to that
// it will recieve redux state as an additional props and hold it to make use it in your app.
const mapStateToProps = (state) => {
  return {
    remainingCakes: state.cake.numberOfCakes,
  };
};

// This will be second additional prop to cake container component.
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// connects our react cake container app to the redux store.
// but if you want to emit only an action, then no need of mapStateToProps,
// at that time you have to pass "null" in connect function
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
