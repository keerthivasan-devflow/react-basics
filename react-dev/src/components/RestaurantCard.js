import { CLOUDINARY_IMAGE_URL } from "../utils/constants.js";
import { Link } from "react-router";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoIosStarOutline } from "react-icons/io";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, id } =
    restaurant.info;
  return (
    <>
      <Link to={"/restaurant/" + id}>
        <div className="shadow-lg p-6 cursor-pointer border-2 border-gray-300">
          <img
            src={CLOUDINARY_IMAGE_URL + cloudinaryImageId}
            alt="Paradise Biryani"
            className="w-full h-48 object-cover"
          />
          <h3 className="text-lg font-bold text-gray-800 mt-2">{name}</h3>
          <p className="text-gray-800 mt-2">{cuisines.join(", ")}</p>
          <p className="flex justify-between my-2 text-gray-400">
            <span className="flex items-center space-x-1">
              <IoIosStarOutline className="text-lg" />
              <span>{avgRating} stars</span>
            </span>
            <span className="flex items-center space-x-1">
              <AiOutlineClockCircle className="text-lg" />
              <span>{sla.deliveryTime} minutes</span>
            </span>
          </p>
        </div>
      </Link>
    </>
  );
};

export const withpromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="bg-gray-500 p-1 text-gray-50 absolute bottom-0 w-full text-center">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
