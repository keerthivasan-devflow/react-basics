# JSX Elements / BABEL Library Features / React Components

## PART - 1
Add your custom scripts for "start", "build", and "test" inside the "scripts" section of the `package.json` file. 
To start your local server, run the following command: `npm start` (or `npm run start`).

**Note:** `npm start` is a shorthand command that works only for "start" because it is a reserved keyword in NPM. However, it will not work for "build". Instead, you should execute `npm run build` to build the project.

### How to create a React Element
- **Create a React Element using `React.createElement()` which accepts three parameters**
   - type - This is the type of the element you want to create, typically a string / React component.
   - options - An object containing the properties (attributes) you want to pass to the element
   - children - Any nested elements or content inside the element. You can pass multiple children elements, separated by commas.
- **Key points about React Element**
   - Immutable - Once created, a React element cannot be changed. If you want to update the UI, React creates new elements and re-renders the necessary parts.
   - Lightweight - not a real DOM node, but rather a lightweight description of what the DOM node should look like.

1. Are React elements and HTML elements the same?
2. What is the drawback of using React.createElement()?
3. `const Heading = <div>JSX Header Component</div>` → Is this again a HTML Element or React Element?
 - This is actually a React element. JSX helps to transform the above piece of code into `React.createElement()` which produces a React element (a JavaScript object). The `render()` method then converts this React element into HTML.

4. Are we writing code to machine / human?
5. What is React Instance, Element and Component?
6. How React Elements are immutable?
7. Composition vs Inheritance

## PART - 3
### JSX Introduction
- JSX is not a part of React; it is not HTML code written in JavaScript.
- JSX is fundamentally different; it is a syntax that resembles HTML or XML.
- JSX is developer-friendly.
- All JSX elements must be properly closed.
- Some attributes in JSX need to be written in camelCase.
- Ultimately, JSX should return a single root element.
- JSX is not understood by browsers, as they can only interpret ES6. In this case, Parcel will transpile the code using the Babel package into actual JavaScript before it reaches the JS engine, since this project folder is configured with the Parcel bundler.
- If there are multiple lines of JSX code, wrap them in parentheses so Babel can clearly identify where the JSX begins and ends.

### Babel Features
- JS Compiler

## PART - 4
### React Component
1. What is a component?
2. What are the two types of components?
   - Functional Component → A regular JavaScript function
   - Class Component → A component defined using ES6 class syntax
3. What is Component Composition? → Normally, Nested Components

**Note:** Always start the component name with a capital letter; otherwise, an error will be thrown.

## PART - 5
1. Can we use a normal function to create a functional component? but recommended approach is an arrow syntax.
2. You can use curly braces within JSX to execute any JavaScript code.
3. How do you render a React element inside a component?
4. Whatever the data passed to curly braces that would be sanitized by JSX. This is how we prevent XSS.

## LEARN MORE
1. XSS Attack
