import React, { useReducer } from 'react'

const ComplexReducerTwo = () => {
  const initialValue = {
    firstCounter: 0,
    secondCounter: 10
  }
  const reducerMethod = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, firstCounter: state.firstCounter + action.value }
      case 'decrement':
        return { ...state, firstCounter: state.firstCounter - action.value }
      case 'incrementTwo':
        return { ...state, secondCounter: state.secondCounter + action.value }
      case 'decrementTwo':
        return { ...state, secondCounter: state.secondCounter - action.value }
      case 'reset':
        return initialValue
      default:
        return state
    }
  }

  const [count, dispatch] = useReducer(reducerMethod, initialValue)

  return (
        <div>
            <h1>useReducer Functionality w/ Objects</h1>
            <h3>First Counter: {count.firstCounter} </h3>
            <h3>Second Counter:{count.secondCounter}</h3>
            <button onClick={() => { dispatch({ type: 'increment', value: 1 }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: 'decrement', value: 1 }) }}>Decrement</button>

            <button onClick={() => { dispatch({ type: 'incrementTwo', value: 2 }) }}>Increment Twice</button>
            <button onClick={() => { dispatch({ type: 'decrementTwo', value: 2 }) }}>Decrement Twice</button>

            <button onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>
        </div>
  )
}

export default ComplexReducerTwo
