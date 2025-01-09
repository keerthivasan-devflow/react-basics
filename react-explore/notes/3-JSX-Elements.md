# JSX Elements / BABEL Library Features / React Components

# PART - 1
Add your custom scripts for "start", "build", and "test" inside the "scripts" section of the `package.json` file. 
To start your local server, run the following command: `npm start` (or `npm run start`).

Note: `npm start` is a shorthand command that works only for "start" because it is a reserved keyword in NPM. However, it will not work for "build". Instead, you should execute `npm run build` to build the project.

# PART - 3
# JSX Introduction
- JSX is not a part of React; it is not HTML code written in JavaScript.
- JSX is fundamentally different; it is a syntax that resembles HTML or XML.
- JSX is developer-friendly.
- All JSX elements must be properly closed.
- Some attributes in JSX need to be written in camelCase.
- Ultimately, JSX should return a single root element.

Note: JSX is not understood by browsers, as they can only interpret ES6. In this case, Parcel will transpile the code using the Babel package into actual JavaScript before it reaches the JS engine, since this project folder is configured with the Parcel bundler.

<!-- Example:  const h1 = <h1 id="header">Hello React using JSX</h1>;   -->
This is actually a React element.  
JSX is transformed into `React.createElement()` which produces a React element (a JavaScript object). The `render()` method then converts this React element into HTML.

Note: If there are multiple lines of JSX code, wrap them in parentheses so Babel can clearly identify where the JSX begins and ends.

# Babel Features
- JS Compiler

# PART - 4
# React Component

1. What is a component?
2. What are the two types of components?
   a. Functional Component – A regular JavaScript function.
   b. Class Component – A component defined using ES6 class syntax.
3. What is Component Composition? - Nested Components

Note: Always start the component name with a capital letter; otherwise, an error will be thrown.

# PART - 5
1. Can we use a normal function to create a functional component? but recommended approach is an arrow syntax.
2. You can use curly braces within JSX to execute any JavaScript code.
3. How do you render a React element inside a component?
4. Whatever the data passed to curly braces that would be sanitized by JSX. This is how we prevent XSS.

# LEARN MORE
1. XSS Attack
