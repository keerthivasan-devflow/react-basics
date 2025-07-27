# useState()

1. Adding state to a component
2. Updating state based on the previous state
3. Updating objects and arrays in state
4. Avoiding recreating the initial state
5. Resetting state with a key
6. Storing information from previous renders

# Adding state to a component

- let [something, setSomething] = useState(initialState)
- The convention is to name state variables like [something, setSomething] using array destructuring.

The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.

# Avoiding recreating the initial state

If you pass a function as initialState, it will be treated as an initializer function. It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state

```js
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos());
}
```

Although the result of createInitialTodos() is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating large arrays or performing expensive calculations.

```js
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
}
```

# Updating state based on the previous state

```js
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

However, after one click, count will only be 1 rather than 5!
This is because calling the set function does not update the count state variable in the already running code.

To solve this problem, you can pass an updater function to setCount. If you pass a function to a setter function, it will be treated as an updater function. It must be pure, should take the pending state as its only argument, and should return the next state.

Here, a => a + 1 is your updater function. It takes the pending state and calculates the next state from it.
React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:

- a => a + 1 will receive 0 as the pending state and return 1 as the next state.
- a => a + 1 will receive 1 as the pending state and return 2 as the next state.
- a => a + 1 will receive 2 as the pending state and return 3 as the next state.
- a => a + 1 will receive 3 as the pending state and return 4 as the next state.
- a => a + 1 will receive 4 as the pending state and return 5 as the next state.

There are no other queued updates, so React will store 5 as the current state in the end
However, if you do multiple updates within the same event, updaters can be helpful.

# Important Notes
- Reading or logging the state immediately after calling the setter inside the same event handler or function accesses the old snapshot.
- React does not immediately update the state variable after setName; it schedules the update and will apply it on the next render cycle.
- This is because React state updates are asynchronous and batched: the state variable in the current function call still holds the previous value. The updated state reflecting "Keerthivasan" will be available only in the next render, not immediately after setName.
- React batches the state updates
- React may call your initializer and updater function twice due to development-mode only behaviour[StrictMode] does not affect the production
- If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children. This is an optimization.

# Troubleshooting

1. I’ve updated the state, but logging gives me the old value
2. I’ve updated the state, but the screen doesn’t update
3. I’m getting an error: “Too many re-renders”
   Wrong: calls the handler during render
  ```html
   <button onClick={handleClick()}>Click me</button>

   Correct: passes down the event handler
   <button onClick={handleClick}>Click me</button>

   Correct: passes down an inline function
   <button onClick={(e) => handleClick(e)}>Click me</button>
   ```

4. My initializer or updater function runs twice
5. I’m trying to set state to a function, but it gets called instead
