import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const rotiItems =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[15].card
      .card.itemCards || [];

  const softDrinks =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[20].card
      .card.itemCards || [];

  const freshJuices =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[25].card
      .card.itemCards || [];

  const nonVegMeals =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card.itemCards || [];

  return (
    <>
      <div className="flex flex-col border-2 border-gray-500 shadow-xl m-4 p-4 max-w-xs max-h-fit">
        <img src={CLOUDINARY_IMAGE_URL + cloudinaryImageId} />
        <p>{name}</p>
        <p>{avgRatingString}</p>
        <p>{totalRatingsString}</p>
        <p>{cuisines}</p>
        <p>{locality}</p>
      </div>
      <div className="flex flex-row m-4 p-4 space-x-6">
        <section>
          <h3 className="font-semibold">Non-Veg Meals Combo</h3>
          <ul className="flex flex-col text-gray-600">
            {nonVegMeals.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="font-semibold">Roti Items</h3>
          <ul className="flex flex-col text-gray-600">
            {rotiItems.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="font-semibold">Soft Drinks</h3>
          <ul className="flex flex-col text-gray-600">
            {softDrinks.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="font-semibold">Beverages And Fresh Juices</h3>
          <ul className="flex flex-col text-gray-600">
            {freshJuices.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default RestaurantMenu;
