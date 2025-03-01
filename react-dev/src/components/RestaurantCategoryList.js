import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const RestaurantCategoryList = ({ itemCards }) => {
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
              className="w-full"
            />
            <button className="bg-gray-950 text-white absolute right-0 bottom-0 px-2 w-full">
              Add +
            </button>
          </section>
        </div>
      ))}
    </>
  );
};

export default RestaurantCategoryList;
