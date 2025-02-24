import { CLOUDINARY_IMAGE_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props.restaurant.info;
  return (
    <>
      <div className="shadow-lg p-6 w-1/5 cursor-pointer border-2 border-gray-300">
        <img
          src={CLOUDINARY_IMAGE_URL + cloudinaryImageId}
          alt="Paradise Biryani"
          className="w-full h-48 object-cover"
        />
        <h3 className="text-lg font-bold text-gray-800 mt-2">{name}</h3>
        <p className="text-gray-800 mt-2">{cuisines.join(", ")}</p>
        <p className="flex justify-between my-2 text-gray-400">
          <span>{avgRating} stars</span>
          <span>{sla.deliveryTime} minutes</span>
        </p>
      </div>
    </>
  );
};

export const promotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
