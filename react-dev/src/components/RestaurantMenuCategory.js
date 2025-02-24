import { useState } from "react";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const RestaurantMenuCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[800px] mx-auto bg-gray-50">
      <section className="m-4">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex justify-between"
        >
          <h3 className="flex space-x-2 font-semibold mb-2">
            <span>{data.title}</span>
            <span>({data.itemCards.length})</span>
          </h3>

          <button>
            {isOpen ? (
              <MdKeyboardArrowUp className="text-2xl cursor-pointer" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl cursor-pointer" />
            )}
          </button>
        </div>
        {isOpen && (
          <>
            {data.itemCards.map((item) => (
              <div className="flex mb-2">
                <section className="border-b-2 border-b-gray-100 w-10/12">
                  <div className="flex space-x-2">
                    <span>{item.card.info.name}</span>
                    <span>
                      - Rs.{" "}
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {item.card.info.description}
                  </div>
                </section>
                <section className="w-2/12 border-2 border-gray-100 relative">
                  <img
                    src={CLOUDINARY_IMAGE_URL + item.card.info.imageId}
                    className="w-full"
                  />
                  <button className="bg-orange-400 absolute right-0 bottom-0 px-2">
                    Add +
                  </button>
                </section>
              </div>
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default RestaurantMenuCategory;
