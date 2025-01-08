import React, { useContext } from 'react'
import { ContextReducer } from './CounterReducer'

const ReducerC = () => {
  const context = useContext(ContextReducer)
  return (
        <div>
            <h1>Complex Reducer functionality for counter operation.</h1>
            <p>Reducer C</p>
            <p>Counter : {context.countValue}</p>
            <button onClick={() => { context.countMethod('increment') }}>Increment</button>
            <button onClick={() => { context.countMethod('decrement') }}>Decrement</button>
            <button onClick={() => { context.countMethod('reset') }}>Reset</button>
        </div>
  )
}

export default ReducerC
