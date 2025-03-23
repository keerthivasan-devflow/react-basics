import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../actions/buyCake.js";

const CakeView = ({ totalCakes, buyCake, cakeShopOwner }) => {
  return (
    <div className="border-2 p-3 w-[300px] text-center">
      <p className="uppercase text-center font-semibold">{cakeShopOwner}</p>
      <p className="font-semibold">Number of available cakes - {totalCakes}</p>
      <button
        className="bg-blue-500 text-white font-semibold w-full"
        onClick={buyCake}
      >
        Buy Cake
      </button>
    </div>
  );
};

// While mapStateToProps() connects components to the state, 
// mapDispatchToProps() empowers components to dispatch actions to modify that state.
// In addition to that will recieve an additional props which are passed to the Cake Component itself.
// Here the state parameter is required one whereasa ownProps is an optional.
const mapStateToProps = (state, ownProps) => {
  return {
    totalCakes: state.cake.numberOfCakes,
    cakeShopOwner: ownProps.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// If your app wants to get data from the redux store (OR) dispatch actions on the redux store. 
// connect() can take up to four arguments [all of which are optional - connect()(Cake)] 
// and returns a higher order component, which can be used to wrap any React component.

// This allows you to separate your React application components as presentational.
// You can pass NULL if any of these arugments will be absence.
export default connect(mapStateToProps, mapDispatchToProps)(CakeView);
