Functional: At the end of the day, when we say a functional component is rendering, it means that the component is being invoked and loaded (mounted) in the browser.

Class:
- When we refer to loading a class-based component, it means creating an instance of the class.
- Creating an instance of the class automatically calls the constructor method.
- The constructor is the ideal place to receive props and initialize state variables.

### Topics
1. Create a simple class component
2. How to pass props to a class component and receive it
3. How to create a state variable
4. Destructuring props and state in class component
5. How to update the state variable
6. React component render cycle (Lifecycle) - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
7. 

### Frequently asked questions based on class components

1. How do you define class components?  
2. Why is it necessary to extend the `Component` class from the React package?  
3. How do you pass props to class components and use them in JSX?  
4. Why must we call `super(props)` inside the constructor?  
5. Note: Any props passed to a class component can be accessed anywhere within the class using `this.props`.
**6. Output of the following code snippet:** This code will work without any error but not good practice
    this.state = {
      count: 0,
    };

    this.state2 = {
      name: "keerthivasan",
    };

7. Is it possible to use `this.setState()` anywhere within a class component? Yes.  
8. Why is it not recommended to update the state directly? What are the consequences?  
9. When does a React component re-render?
10. componentWillUnmount() - When does it happen? usually while navigating from one page to another page because React is a Single Page Application. Everything renders on a single page without refreshing or reloading the page. - Major disadvantages of SPA

45.00 start to continue...