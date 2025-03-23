
- In React, useContext() allows you to consume a context's value within a component.
- A Context.Provider is used to supply the value for the context.
- To access the context value using useContext(), the component calling useContext() must be rendered within a Context.Provider, but this provider should be placed higher in the component tree before the component that calls useContext().

## The key takeaway
    Re-rendering on value change: When the context value changes (like the theme in this case), all child components that consume that context will re-render, starting from the provider. This re-render happens even if the components are wrapped with React.memo or other optimizations, because React does not memoize context values automatically.

## Applications
- Managing Theme - A user can switch the theme and the context provider will make the currently selected theme available to all its descendants.
- Managing Localization
- Authentication - You can provide information about the currently logged in user to all components via context.
- Manage routing - Most routing packages rely on the context API to hold information about the active route. Therefore, if you've ever used one of the front-end routing libraries, chances are high that it uses the context API under the hood.