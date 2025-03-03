import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const RestaurantCategoryList = ({ itemCards }) => {
  const [itemCount, setItemCount] = useState(0);

  const itemCountHandler = () => {
    setItemCount((itemCount) => itemCount + 1);
  };

  const dispatch = useDispatch();
  const addToCartHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {itemCards?.map((item) => (
        <div className="flex mb-2" key={item?.card?.info?.id}>
          <section className="border-b-2 border-b-gray-100 w-10/12">
            <div className="flex space-x-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - Rs.{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              {item?.card?.info?.description}
            </div>
          </section>
          <section className="w-2/12 border-2 border-gray-100 relative">
            <img
              src={CLOUDINARY_IMAGE_URL + item?.card?.info?.imageId}
              className="w-full h-24"
            />
            <button
              className="bg-gray-950 text-white absolute right-0 bottom-0 px-2 w-full 
              cursor-pointer hover:bg-gray-300 hover:text-black"
              onClick={() => addToCartHandler(item)}
            >
              {itemCount === 0 ? (
                "Add"
              ) : (
                <>
                  <span>-</span>
                  <span>{itemCount}</span>
                  <span onClick={() => addToCartHandler(item)}>+</span>
                </>
              )}
            </button>
          </section>
        </div>
      ))}
    </>
  );
};

export default RestaurantCategoryList;
