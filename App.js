import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.webp";
import restaurant from "./images/restaurant.jpg";

const restaurantAPI = [
  {
    restaurantName: "Spicy Bites",
    cuisines: ["Indian", "Chinese"],
    menuItems: ["Paneer Butter Masala", "Spring Rolls", "Biryani"],
    deliveryTime: 30,
    ratings: 4.5,
  },
  {
    restaurantName: "The Pizzeria",
    cuisines: ["Italian", "Pizza"],
    menuItems: ["Margherita Pizza", "Pepperoni Pizza", "Garlic Bread"],
    deliveryTime: 25,
    ratings: 4.2,
  },
  {
    restaurantName: "Burger King",
    cuisines: ["American", "Fast Food"],
    menuItems: ["Cheeseburger", "French Fries", "Milkshake"],
    deliveryTime: 20,
    ratings: 3.8,
  },
  {
    restaurantName: "Sushi Haven",
    cuisines: ["Japanese", "Sushi"],
    menuItems: ["California Roll", "Nigiri", "Tempura"],
    deliveryTime: 40,
    ratings: 4.7,
  },
  {
    restaurantName: "Taco Fiesta",
    cuisines: ["Mexican", "Tacos"],
    menuItems: ["Chicken Tacos", "Beef Burritos", "Guacamole"],
    deliveryTime: 35,
    ratings: 4.1,
  },
  {
    restaurantName: "Curry Corner",
    cuisines: ["Indian", "South Indian"],
    menuItems: ["Dosa", "Butter Chicken", "Sambar"],
    deliveryTime: 50,
    ratings: 4.4,
  },
  {
    restaurantName: "Vegan Delight",
    cuisines: ["Vegan", "Healthy"],
    menuItems: ["Vegan Burger", "Smoothie Bowl", "Avocado Salad"],
    deliveryTime: 30,
    ratings: 4.8,
  },
  {
    restaurantName: "The Pasta House",
    cuisines: ["Italian", "Pasta"],
    menuItems: ["Spaghetti Aglio Olio", "Fettuccine Alfredo", "Lasagna"],
    deliveryTime: 25,
    ratings: 4.3,
  },
  {
    restaurantName: "Biryani King",
    cuisines: ["Indian", "Biryani"],
    menuItems: ["Chicken Biryani", "Mutton Biryani", "Raita"],
    deliveryTime: 40,
    ratings: 4.6,
  },
  {
    restaurantName: "Café Delight",
    cuisines: ["Cafe", "Continental"],
    menuItems: ["Pasta", "Café Mocha", "Croissants"],
    deliveryTime: 15,
    ratings: 3.9,
  },
  {
    restaurantName: "BBQ Grill",
    cuisines: ["Grill", "BBQ"],
    menuItems: ["Grilled Chicken", "BBQ Ribs", "Garlic Bread"],
    deliveryTime: 30,
    ratings: 4.0,
  },
  {
    restaurantName: "Ramen House",
    cuisines: ["Japanese", "Ramen"],
    menuItems: ["Shoyu Ramen", "Miso Ramen", "Tonkotsu Ramen"],
    deliveryTime: 45,
    ratings: 4.2,
  },
  {
    restaurantName: "Salad Studio",
    cuisines: ["Healthy", "Salads"],
    menuItems: ["Greek Salad", "Caesar Salad", "Fruit Salad"],
    deliveryTime: 20,
    ratings: 4.3,
  },
  {
    restaurantName: "Dim Sum Delight",
    cuisines: ["Chinese", "Dim Sum"],
    menuItems: ["Pork Dumplings", "Shrimp Dim Sum", "Spring Rolls"],
    deliveryTime: 30,
    ratings: 4.1,
  },
  {
    restaurantName: "Pizza Town",
    cuisines: ["Italian", "Pizza"],
    menuItems: ["Four Cheese Pizza", "Hawaiian Pizza", "Pizza Pockets"],
    deliveryTime: 30,
    ratings: 4.0,
  },
];

// Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          className="logo"
          src={logo}
          alt="Logo"
          title="Logo"
          width="100"
          height="100"
        />
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Contact</li>
          <li className="navbar-item">Cart</li>
        </ul>
      </nav>
    </header>
  );
};

// Search Component
const Search = () => {
  return (
    <div className="search-bar">
      <input
        type="search"
        id="search"
        className="search-input"
        placeholder="Search your favorite restaurant"
      />
    </div>
  );
};

// RestaurantCard Component
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

// Main Content Container
const Container = () => {
  return (
    <main className="main-content">
      <Search />
      <div className="restaurant-list">
        {restaurantAPI.map((restaurant) => (
          <RestaurantCard restaurantData={restaurant} key={restaurant.restaurantName} />
        ))}
      </div>
    </main>
  );
};

// App Component (Root Component)
const App = () => {
  return (
    <div className="app">
      <Header />
      <Container />
    </div>
  );
};

// Rendering the App component into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
