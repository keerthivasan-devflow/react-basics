# PART - 1
1. How to write a "Hello World" program using pure HTML?  
2. How to write a "Hello World" program using JavaScript and display it in the Chrome browser?  
3. Everything about Content Delivery Network (CDN) links  
    3.1. What does it mean?  
    3.2. Why do we need it?  
    3.3. What are the two types of links available for React?  
        3.1.1. `react.development.js`  
        3.1.2. `react-dom.development.js`  
4. What are the advantages and disadvantages of using a CDN?  
5. What is the purpose of the `crossorigin` attribute in CDN links?

# Importing react code into your project via CDN Links
When you import the official CDN links into your project, you gain access to all the resources related to React, allowing you to utilize its full functionality.

After adding the CDN links to your project, open Chrome's Developer Tools, type "React" in the console, and press Enter to experience the power of React. This method confirms that React is properly integrated into your project.

The source code available through these CDN links is written by Facebook (specifically for React) and is written in pure vanilla JavaScript.

# PART - 2
1. How to create a "Hello World" example using React  
    1.1. What is `React.createElement()` and how many arguments can it accept?  
        `React.createElement()` creates an object, not just pure HTML tags.  
    1.2. What is the `ReactDOM.createRoot()` method?  
    1.3. What is the `render()` method?  
        The `render()` method is responsible for taking the React element as an argument, converting it into the corresponding DOM element (e.g., an `h1` tag), and placing it into the DOM tree so that the browser can understand and display it.  
    1.4. How do you add attributes to tags in React?  

2. What is the most expensive operation on a webpage?  
    DOM Manipulation - When a webpage becomes more interactive and the DOM tree changes frequently, this operation becomes costly. To optimize this, libraries have been introduced.

# PART 4
1. How to create hierarchial structure of React Elements in React?
2. How to create siblings React Element?

# PART 5
1. Library vs. Framework  
2. React can be applied to specific sections of your website, such as the header, and you can even integrate it into an existing project.  
3. A framework requires that the entire application be built using that framework.

# LEARN MORE
1. crossorigin attribute
2. Framework vs. Library