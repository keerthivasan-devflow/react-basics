## Planning
- Header
  - Logo
  - Navigation Menus
- Body
- Search Bar
- Restaurant Card
- Footer
- Copyright Info
- Social Links

## PART - 1

## PART - 2
### Props and Props Destructuring
- Props are usually passed to a component to render dynamic data. (Like passing arguments to a function)
- Instead of passing all the props individually in each component, you can retrieve them through an API once and use them for rendering.
- `key` prop
- `index` prop

- Boilerplate code
- Duplicating a component with props.
- Create a JSON file, pass it as a prop, and render it using indexing.
- Create a JSON file, pass it as a prop, and render it using indexing.
   <RestaurantCard restaurant={restaurantList[0]}/>
   <RestaurantCard restaurant={restaurantList[1]}/>
   <RestaurantCard restaurant={restaurantList[2]}/>
   <RestaurantCard restaurant={restaurantList[3]}/>
- Use the array.map() method to simplify the process.

## LEARN MORE
1. JSON viewer extension
2. Configuration-Driven UI
3. Cloudinary Image Id - CDN where all the images have been uploaded
- You can render any image dynamically like `{cloudinary URL + cloudinary Image Id}`

## Questions
1. How to write an inline style in React?
2. What is the issue with the following approach?
   <RestaurantCard restaurant="Kritunga Biryani" cuisines=[...] averageRating="..."/>
   <RestaurantCard restaurant="Paradise Biryani" cuisines=[...] averageRating="..."/>
   <RestaurantCard restaurant="Meghna Foods" cuisines=[...] averageRating="..."/>
   <RestaurantCard restaurant="Buhrai Restaurant" cuisines=[...] averageRating="..."/>
3. What are the two methods for destructuring props in React?
4. What are props and are they mutable?

PART 1 - 00.00.00 - Created a basic Header and Body Component
PART 2 - 59.20.00 - Props Introduction
