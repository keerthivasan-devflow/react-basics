import restaurant from "../../images/restaurant.jpg"

const RestaurantCard = (props) => {
  const { restaurantName, cuisines, menuItems, deliveryTime, ratings } = props.restaurantData;

  return (
    <>
      <div className="restaurant-card">
        <img
          className="restaurant-image"
          src={restaurant}
          alt="Restaurant"
          title="Restaurant"
          width="200"
          height="200"
        />
        <div className="restaurant-info">
          <h3 className="restaurant-name">{restaurantName}</h3>
          <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
          <p className="restaurant-menu-items">{menuItems.join(", ")}</p>
          <p className="restaurant-rating">{ratings} stars</p>
          <p className="restaurant-time">{deliveryTime}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard