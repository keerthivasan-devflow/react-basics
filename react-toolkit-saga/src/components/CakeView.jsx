import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { orderCake, restockCake } from "../features/cake/cakeSlice";
import { cakeActions } from "../features/cakeSlice";

const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Cake Component - {numberOfCakes}</h1>
      <button onClick={() => dispatch(cakeActions.orderCake())}>Order Cake</button>
      <button onClick={() => dispatch(cakeActions.restockCake(10))}>Restock Cake</button>
    </>
  );
};

export default CakeView;
