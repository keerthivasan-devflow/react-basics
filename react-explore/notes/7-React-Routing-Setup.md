# Routing Concepts
To set up routing in a React app, we create a routing configuration in the root-level component.

- useRouterError() hook
- <Outlet />

### Why do we use the `Link` component in React Router?
Using an anchor (`<a>`) tag in JSX causes the page to reload each time the URL changes. On the other hand, the `Link` component is designed to prevent page refreshes. It allows the URL to change and routes to the correct location without reloading the page when you click on a menu item.

### Two types of routing in React
- Client-Side Routing: No network requests are made. Instead, the component is rendered directly, with network calls only being triggered when fetching API data.

- Server-Side Routing: When using an anchor tag like "/about.html", a network request is made to fetch the about.html page, retrieve the data, and render the UI.

### Dynamic Routing
1.18.00 - TO CONTINUE...