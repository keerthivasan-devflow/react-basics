## 1. react-basics folder
    This folder will contain the code implementation of the following: Class Components, Hooks Concepts, Redux, Routers, React Form Hook

**1. Class Based Components**
 - Simple Class Component Creation
 - Pass props to class component
 - Children Prop
 - Define state variable
 - Updating the state variable `this.setState()`
 - Destructuring State and Props
 - Conditional Rendering
 - Rendering List (along with key and index prop usage)
 - Controlled vs Uncontrolled Components
 - Basic Form Handling
 - Lifecycle Methods
 - Pure Components
 - Refs
 - React Portals
 - Higher Order Component (lifting state)
 - Render Props
 - Context API (props drilling)
 - HTTP Request (GET, POST, PUT, DELETE)
 - Reconciliation
 - React Fiber
 - Synthetic Events
 - React Hydrate

**2. Functional Components (Hooks Concepts)**
 - useState()
 - useEffect()
 - useContext()
 - useRef()
 - useContext()
 - useReducer()
 - useMemo()
 - useCallback()
 - custom hooks
 - React 18 Hooks
    - useId()
    - useDeferredValue()
    - useImperativeHandle()
    - useTransition()
    - useLayoutEffect
    - useDebugValue

**3. Redux**

**4. Router**
 - Configuring Routes
    - `BrowserRouter`, `Routes`, and `Route` Components  
    - `Link` and `NavLink` Components  
    - `HashRouter` and `MemoryRouter` Components  
    - `Navigate` Component  
    - Relative Links Should Not Start with `/`

 - Navigating Programmatically
    - Navigating on Button Click Using the `useNavigate` Hook  
    - Navigating Back to a Previously Rendered Page  
    - Using the `useLocation` Hook

 - Match Route/Page Not Found (using `*`)
 - Nested Routes
 - Index Route
 - Dynamic Route
 - URL Parameters
 - Search Parameters
 - Lazy Loading
 - Authentication

**5. React Form Hook**

## Frequently asked interview questions

### React Core Concepts
1. Library vs. framework
2. Is React declarative or imperative?
3. What is declarative and imperative programming? Provide examples.
4. What is a component?
5. Advantages and disadvantages of declarative vs. imperative approaches
6. What is the virtual DOM?
7. What is Babel
8. Comparison of state and props
9. What happens if we define state outside the constructor?
10. Comparison of functional vs. class components
11. What is JSX?
12. If you have a list of props defined in your component and have passed one of them to another component, how can you send the remaining props all at once?
13. Passing a prop to a parent component from a child component
14. Event handling – binding event handlers in four ways
15. Pure components
16. Context API
   - How to set default values for the context provider  
   - Three ways to access the context value with class components  
   - Limitations of accessing the context value with `contextType`

### Hooks Concepts
1.	What is a Hook and Why Do We Need It?
2.	useState() 
    - What is useState?
    - What are the hidden tricks of the useState hook?
    - How can useState be implemented with primitive and non-primitive values?
    - What are the drawbacks or limitations of the useState hook?
3.	useEffect()
    - What is useEffect()?
    - How many parameters can useEffect() hold?
    - Does useEffect() return any values?
    - How can useEffect() be invoked based on specific actions, not on every re-render?
    - How can useEffect() be called only once in React?
    - How can useEffect() be used with cleanup?
4.	useReducer()
    - How to implement a simple useReducer?
    - How to implement an initial state as an object and work with useReducer?
    - How to implement actions as objects and work with useReducer?
    - How to implement multiple useReducer hooks?
    - How to use useReducer with useContext?
    - How to use useReducer with useEffect?
    - What are the differences between useState and useReducer?

### Redux Concepts
1.	What is redux and why do we need it?
2.	What are the three core concepts/principles of redux?
3.	Multiple reducers w/ combine Reducers
4.	What is middleware?
5.	What is redux thunk?
6.	What is immer package?
7.	What is react redux package?