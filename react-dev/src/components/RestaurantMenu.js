import { CLOUDINARY_IMAGE_URL, ITEM_CATEGORY } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  const { cloudinaryImageId, name } =
    restaurantInfo?.cards[2]?.card?.card?.info || {};

  const itemCategory =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) => category?.card?.card["@type"] === ITEM_CATEGORY
    );

  const [showIndex, setShowIndex] = useState(0);

  return (
    <>
      <div className="relative">
        <img
          src={CLOUDINARY_IMAGE_URL + cloudinaryImageId}
          alt="Hotel Empire Restaurant"
          className="max-h-[300px] object-cover w-full"
        />
        <div className="absolute top-25 left-100 backdrop-blur-2xl p-4 w-[750px] text-white text-center">
          <p className="font-semibold text-3xl">{name}</p>
        </div>
      </div>

      <div className="my-5">
        {itemCategory?.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
