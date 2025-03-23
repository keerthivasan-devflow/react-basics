
## YouTube Channel - LeelaWebDev (web development course)

## References
- https://github.com/Bharat2044/Namaste-React
- https://logo.com/dashboard
- https://fakestoreapi.com/docs (FAKE API DATA FOR TESTING/LEARNING PURPOSE)

- Typescript PropTypes - https://www.geeksforgeeks.org/reactjs-proptypes/ (Deprecated now in React 19)

## React 18 Features
- Automatic Batching
- Suspense fallback UI
- createRoot, hydrateRoot

- In order to distinguish between urgent and non-urgent updates, React has introduced a new concept called transition.
- Transition updates move the user interface (UI) from one view to another.
- Urgent updates reflect direct input, such as typing, clicking, pressing, etc.
- Concurrent Rendering - React can interrupt, pause, restart, or quit a render in React 18 with concurrent rendering.
    - useDeferredValue()
    - useTransition()
- useSyncExternalStore()
- useInsertionEffect()
- useId() - SSR Compatibility. Reusable Components. Form Accessibility
- We’ve also changed unmountComponentAtNode to root.unmount:


## StrictMode
Some of the key features of StrictMode include:
- Identifying components with unsafe lifecycles.
- Warning about legacy string ref API usage.
- Detecting unexpected side effects.
- Detecting legacy context API.

Note: StrictMode only works on development mode.