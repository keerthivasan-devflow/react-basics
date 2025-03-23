## Core Redux Notes

- What is Redux?
- What is the difference between Presentational and Container components?
    While container components tend to be stateful(could be impure) and presentational components tend to be stateless(pure), this is not a hard rule.

    Presentational/View/Dumb Components - These are the components whose primary responsibility is to present the data on the UI. They take in the data from the container components. These components are stateless unless they need their own state for rendering the UI. They do not alter the data that they receive. These components are easily made reusable, as they simply display data without altering this data.

    Container/Smart Components - This is responsible for managing the state and data logic of the application. They interact with the Redux store or other data sources, fetch data, handle user interactions, and manage the application state.

    Separation of concerns - easy to test, debug, read and maintain
    Code refactoring
    Loosely coupled components

- What are the three core principles of Redux? Can you explain each of them?
- What is the purpose of the connect() method, and which library provides it?
- How many parameters can the connect() method accept? Are all of them optional or mandatory?
- What are mapStateToProps and mapDispatchToProps?
- How many parameters does the `mapStateToProps` function receive?
- What are the pros and cons of using Redux?
- What is the purpose of the Immer library?
- What is the purpose of the Redux-Thunk middleware?
- What is middleware in the context of Redux?
- What is the Redux-Logger middleware used for?