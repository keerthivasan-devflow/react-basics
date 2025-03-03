import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCake, restockCake, restoreCake } from "../slices/cakeSlice";

const CakeView = () => {
  const no_of_cakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Cake Component - {no_of_cakes}</h1>
      <button onClick={() => dispatch(orderCake())}>Order Cake</button>
      <button onClick={() => dispatch(restockCake(10))}>Restock Cake</button>
      <button onClick={() => dispatch(restoreCake())}>Restore Container</button>
    </>
  );
};

export default CakeView;
