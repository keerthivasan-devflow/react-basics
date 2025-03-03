https://github.com/reduxjs/redux-toolkit/tree/e85eb17b39/docs/tutorials

### State Management Packages
- Redux
- Redux toolkit (most recommended package)
- Zustand (becoming more Popular nowadays)

### What is Redux?
- Redux is a JS library for predictable and maintainable global state management.
- Redux is not limited to React; it can also be integrated with frameworks like Vue, Angular, Next, and more.
- The core principles of Redux are: Store (state), Dispatch(action), and Reducers(redux-store update logic).

### RTK introduced to solve few common problems of core Redux
- Configuring a redux store is too complicated
- I have to add a lot of packages to get Redux to do anything useful
- Redux requires too much boilerplate code
- Redux Toolkit offers excellent TS support, with APIs that are designed to give you excellent type safety and minimize
  the number of types you have to define in your code
- RTK Query can eliminate the need to write any thunks, reducers, action creators, or effect hooks to manage fetching data
  and tracking loading state

### configureStore()
- `configureStore()` sets up a well-configured Redux store with a single function call, including combining reducers, adding the thunk middleware, and setting up the Redux DevTools integration and more. At the same time, configureStore provides the options to let users modify any of those default behaviors (like turning off thunks and adding sagas, or disabling the DevTools in production)

      configureStore({
        reducer: {},
        middleware: ()=>{},
        devTools: boolean or configuring object for enabling / disabling the devTool,
        preloadedState: {},
        enhancers
      })

  In Redux toolkit, configureStore() applies set of middlewares when you define a store to handle common functionality
  Therefore by default, middlewares returns an array and our custom middlewares also returns an array so we concate them
  instead of mutating it. [redux-thunk, redux-immutable-state-invariant, redux-serializable-state-invariant]

### Update the state in redux vs redux-toolkit
- **Core Redux**
  - By creating a copy of the state and updating the copied state and returning the state is mandatory [use immer package]
- **Redux Toolkit**
  - Directly mutating the state and returns the state indirectly / automatically [Redux toolkit uses immer indirectly]
  - Either mutate the existing state to update the UI, or return the new state using the `return` keyword to update the UI.

### createAsyncThunk(type, callback, options)
- A function that accepts a Redux action type string and a callback function that should return a promise. It generates
  promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that
  will run the promise callback and dispatch the lifecycle actions based on the returned promise.
- It does not generate any reducer functions, since it does not know what data you're fetching, how you want to track
  loading state, or how the data you return needs to be processed. You should write your own reducer logic that handles
  these actions, with whatever loading state and processing logic is appropriate for your own app.

For example, a type argument of 'users/requestStatus' will generate these action types:

- pending: 'users/fetchUsersRequest/pending' - console.log(fetchUsersRequest.pending.type)
- fulfilled: 'users/fetchUsersRequest/fulfilled' - console.log(fetchUsersRequest.fulfilled.type)
- rejected: 'users/fetchUsersRequest/rejected' - console.log(fetchUsersRequest.rejected.type)

### useSelector()
- A selector is used to read data from the store or slice and display it in a React component.
- "Subscribing to the store" means consider an example that a component, like the header, stays in sync with the
  CartSlice using a selector. This ensures that when the CartSlice is updated, the header component automatically
  reflects the updated data.

### Advantages
In Redux Toolkit, action creators are automatically generated with a `type` and `payload` property.
The `type` is a combination of the slice's name and the reducer's key, which creates a unique identifier for
the action. The `payload` is passed as an argument when dispatching the action. This process is handled behind
the scenes by Redux Toolkit.

In contrast, with core Redux, you must manually define action creators. You create an action object by specifying the
`type` property and then define a function that acts as an action creator, which returns the action object that includes
the `type` and `payload` properties.

**In short, All of the action creators and action types are generated automatically, and the reducer code is shorter and easier to understand. It's also much more clear what's actually being updated in each case.**

Absence of combined reducers

### Questions
1. Is it beneficial to store all the data in a single object?
2. What are the three fundamental principles of Redux?
3. How can we link our store to a React component?
4. Is Redux essential for a React application?
5. What are the alternative packages available for state management?
6. What is the difference between Redux & Redux Toolkit?
7. The Redux Store can be provided to either a specific portion of the app or the entire app.
8. What is the different between handleClick(), () => handleClick()?
9. How do we update the state in both core-redux and Redux Toolkit?
10. What is the difference between initialState & preloadedState?
11. What is proxy object? What is current() in redux tookit?

### Timeline
00.00.00 - Redux Toolkit Introduction
00.39.45 - Installation of required packages and code implementation of redux toolkit
01.58.00 - History of core redux
