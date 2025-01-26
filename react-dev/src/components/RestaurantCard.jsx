import restaurant from "../../images/restaurant.jpg";

const RestaurantCard = (props) => {
  const { restaurantName, cuisines, menuItems, deliveryTime, ratings } =
    props.restaurantData;

  return (
    <>
      <div className="m-2 p-2 w-[250px] bg-green-50 hover:bg-green-200 rounded-lg shadow-lg">
        <img src={restaurant} alt="Restaurant" title="Restaurant" className="rounded-lg" />
        <div className="px-2">
          <h3 className="font-bold py-2">{restaurantName}</h3>
          <p>
            <span>Cuisines:</span> {cuisines.join(", ")}
          </p>
          <p>
            <span>Items:</span> {menuItems.join(", ")}
          </p>
          <section className="flex justify-between pt-2 text-green-500">
            <p>{ratings} Stars</p>
            <p>{deliveryTime} Minutes</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
