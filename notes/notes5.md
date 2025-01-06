# PART - 1

Cleaning up the project files or folders
Folder structure
Named/Default Imports/Exports

# PART - 2
# HOOKS CONCEPT

React Features
    - Declarative
    - Component architecture
    - Faster/Efficient DOM Manipulation 
        - Diffing Algorithm
        - Virtual DOM
        - Reconciliation

Hook is just a normal JS function(*written by facebbook*). They are super-powerful functions in React.
useState()
useEffect()

React hooks are usually imported using named imports/exports

What is Reconciliation? (React Fiber)
    - Virtual DOM
    - What is Diffing Algorithm?
Instead of updating the entire real DOM every time a change occurs, React compares the virtual DOM with the current real DOM and only applies the necessary changes (a process known as reconciliation).

React Fiber is the new reconciliation engine (algorithm) introduced in React 16. Before React Fiber, React used a different algorithm (referred to as "React Stack Reconciliation"). Fiber was introduced to address limitations in the older system, particularly with regard to performance and handling complex UI updates.
    - Incremental Rendering
    - Concurrency
    - Prioritization of updates

# source : https://github.com/acdlite/react-fiber-architecture
Learn about component, instance, react element, reconciliation and lot more.