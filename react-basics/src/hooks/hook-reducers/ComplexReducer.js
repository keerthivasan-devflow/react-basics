import React, { useReducer, useState } from 'react'

const ComplexReducer = () => {
  const initialValue = {
    firstCounter: 0
  }
  const reducerMethod = (state, action) => {
    // console.log("state:", state)
    // console.log("action:", action)
    switch (action.type) {
      case 'increment':
        return { firstCounter: state.firstCounter + action.payload }
      case 'decrement':
        return { firstCounter: state.firstCounter - action.payload }
      case 'reset':
        return initialValue
      default:
        return state
    }
  }

  const [count, dispatch] = useReducer(reducerMethod, initialValue)

  return (
        <div>
            <h1>useReducer w/ object to have multiple counters...</h1>
            <h3>Count: {count.firstCounter} </h3>
            <button onClick={() => { dispatch({ type: 'increment', payload: 5 }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: 'decrement', payload: 2 }) }}>Decrement</button>
            <button onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>
        </div>
  )
}

export default ComplexReducer
