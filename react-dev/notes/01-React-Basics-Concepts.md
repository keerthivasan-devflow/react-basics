# React Introduction
## PART - 1
1. How to write a "Hello World" program using pure HTML?
2. How to write a "Hello World" program using JavaScript? (using DOM method)
3. Everything about Content Delivery Network (CDN) links
    3.1. What are the two types of links available for React?
        3.1.1. `react.development.js` [core algorithm of react]
        3.1.2. `react-dom.development.js` [useful for DOM manipulation]
4. What are the advantages and disadvantages of using a CDN?
5. What is the purpose of the `crossorigin` attribute in CDN links?

**Why do we need both react.development.js & react-dom.development.js?**
These two files, `react.development.js` and `react-dom.development.js`, are separate because they serve different purposes in a React application.

1. **`react.development.js`**:
   - This file contains the core react library, which is responsible for defining the basic functionality of React. It includes things like creating components, handling state, and managing the component lifecycle.
   - Essentially, this file provides all the logic needed for React's virtual DOM, JSX compilation, hooks, and other core features.

2. **`react-dom.development.js`**:
   - This file is focused on the interaction between React and the actual DOM in the browser.
   - It provides methods for rendering React components to the browser’s DOM, including the `render()` method, which is typically used to render your app’s root component into a DOM element.
   - It also includes functions related to things like component updates, event handling, and the reconciliation process (how React compares and updates the DOM).

 - In summary, React (`react.development.js`) manages the component logic, while ReactDOM (`react-dom.development.js`) is responsible for taking that logic and updating the real DOM in the browser. They are separate to follow the separation of concerns: React handles the framework's core, while ReactDOM manages how those components are rendered in the browser environment.

**Integrating react core functionality into your project via CDN**
- When you import the official CDN links into your project, you gain access to all the resources related to React, allowing you to utilize its full functionality.

- After adding the CDN links to your project, open Chrome's Developer Tools, type "React" in the console, and press Enter to experience the power of React. This method confirms that React is properly integrated into your project via CDN.

- The source code available through these CDN links is written by Facebook (specifically for React) and is written in pure vanilla JavaScript.

## PART - 2
1. How to create a "Hello World" example using React
2. What is `React.createElement()` and how many arguments can it accept?
    This function call `React.createElement()` generates an object representing a React element, which later gets rendered into the actual DOM. When creating elements, React does not immediately modify the actual DOM. Instead, it constructs a virtual DOM, which is a lightweight representation of the document object model. This approach allows React to perform efficient updates by comparing the previous and current states before applying changes to the DOM elements.
3. What is the `ReactDOM.createRoot()` method?
 - createRoot options - onCaughtError, onUncaughtError, onRecoverableError and identifierPrefix
 - **Troubleshooting root.render() | createRoot()**
 - I’ve created a root, but nothing is displayed.
 - I’m getting an error: “You passed a second argument to root.render”
 - I’m getting an error: “Target container is not a DOM element”
 - I’m getting an error: “Functions are not valid as a React child.”
    - This error means that whatever you’re passing to root.render is not a React component. `root.render(App) → root.render(<App />)`
    - If you pass a function to root.render: `root.render(createApp) → root.render(createApp())`
4. What is the `render()` method?
    The `render()` method is responsible for taking the React element as an argument, converting it into the corresponding DOM element (e.g., an `h1` tag), and placing it into the DOM tree so that the browser can understand and display it.  

5. What is the most expensive (time consuming) operation on a webpage?
    DOM Manipulation - When a webpage becomes more interactive and the DOM tree changes frequently, this operation becomes costly. To optimize this, libraries have been introduced.

## PART 3
1. How to create hierarchial structure of React Elements in React?
2. How to create siblings React Element?

## LEARN MORE
1. crossorigin attribute
 -  When you load a script from different domain, the browser will block certain operations for security reasons unless the    server explicitly allows it. Therefore, this controls whether and how the script should be allowed to interact with resources from different origins while respecting security policies like CORS (Cross-Origin Resource Sharing).

 - "anonymous" (default) - Request will be made without any credentials
    If the server responds with a valid CORS header (e.g., Access-Control-Allow-Origin), the script is executed. Otherwise, the browser will block the script.
 - "use-credentials"
    The server must include the Access-Control-Allow-Credentials header, and the Access-Control-Allow-Origin header must not be set to * (it must specify a specific domain).

    The credentials are sent along with the request, and the server must respond with the correct CORS headers that allow the use of credentials.

2. Framework vs. Library
    - React can be applied to specific sections of your website and you can even integrate it into an existing project.  
    - A framework requires that the entire application be built using that framework.
