// import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import RestaurantCategoryList from "./RestaurantCategoryList";

const RestaurantMenuCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  // const handleShowItems = () => {
  //   setShowItems(!showItems);
  // };

  return (
    <div className="w-[800px] mx-auto bg-gray-50">
      <section className="m-4">
        <div onClick={() => setShowIndex()} className="flex justify-between">
          <h3 className="flex space-x-2 font-semibold mb-2">
            <span>{data?.title}</span>
            <span>({data?.itemCards?.length})</span>
          </h3>

          <button>
            {showItems ? (
              <MdKeyboardArrowUp className="text-2xl cursor-pointer" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl cursor-pointer" />
            )}
          </button>
        </div>
        {showItems && <RestaurantCategoryList itemCards={data?.itemCards} />}
      </section>
    </div>
  );
};

export default RestaurantMenuCategory;
