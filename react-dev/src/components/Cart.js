import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store?.cart?.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const removeCartHandler = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="relative">
      <button
        className="absolute right-10 top-0 px-4 font-semibold rounded hover:bg-gray-100 hover:text-black cursor-pointer bg-black text-white"
        onClick={clearCartHandler}
      >
        Clear cart
      </button>
      <div className="mx-auto w-[750px] m-4">
        {items.length === 0 ? (
          <h1 className="text-3xl font-semibold">Cart is empty!</h1>
        ) : (
          <>
            {items.map((item) => (
              <div
                key={item?.card?.info?.id}
                className="flex justify-between m-5 p-2"
              >
                <div className="w-10/12">
                  <span className="font-semibold">
                    {item?.card?.info?.name}
                  </span>
                  <span className="text-red-500">
                    - Rs.{" "}
                    {item?.card?.info?.price
                      ? item?.card?.info?.price / 100
                      : item?.card?.info?.defaultPrice / 100}
                  </span>
                </div>
                <div className="flex justify-around w-2/12">
                  <button
                    className="border px-3 rounded bg-gray-100 cursor-pointer"
                    onClick={() => removeCartHandler(item)}
                  >
                    -
                  </button>
                  <span>{0}</span>
                  <button className="border px-3 rounded bg-gray-100 cursor-pointer">
                    +
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
