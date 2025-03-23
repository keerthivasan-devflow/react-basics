import { screen, render } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/restaurant.json";
import "@testing-library/jest-dom";

test("Testing Restaurant Card Component", () => {
  render(<RestaurantCard restaurant={MOCK_DATA} />);
  const restaurantName = screen.getByRole("Andhra Gunpowder");
  expect(restaurantName).toBeIntheDocument();
});
