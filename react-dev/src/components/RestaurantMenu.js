import { CLOUDINARY_IMAGE_URL, ITEM_CATEGORY } from "../utils/constants";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);
  const [isOpen, setIsOpen] = useState(false);

  let {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    locality,
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  let itemCategory =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => category.card.card["@type"] === ITEM_CATEGORY
    );

  console.log(itemCategory);

  return (
    <>
      <div className="flex flex-col mx-auto max-w-xs my-4">
        <img
          src={CLOUDINARY_IMAGE_URL + cloudinaryImageId}
          alt="Hotel Empire Restaurant"
          className="w-full"
        />
        <p>{name}</p>
        <p>{avgRatingString} stars</p>
        <p>{totalRatingsString}</p>
        <p>{locality}</p>
      </div>

      <div>
        {itemCategory.map((category) => (
          <RestaurantMenuCategory
            key={category.card.card.categoryId}
            data={category.card.card}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
