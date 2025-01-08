import React, { useReducer } from 'react'
import ReducerA from './ReducerA'
import ReducerB from './ReducerB'
import ReducerC from './ReducerC'

const ContextReducer = React.createContext()
const ReducerProvider = ContextReducer.Provider
const ReducerConsumer = ContextReducer.Consumer

const CounterReducer = () => {
  const initialState = 0
  const reducer = (state, action) => {
    switch (action) {
      case 'decrement':
        return state - 1
      case 'increment':
        return state + 1

      case 'reset':
        return initialState
      default: return state
    }
  }

  const [count, dispatch] = useReducer(reducer, initialState)
  return (
        <div>
            <ReducerProvider value={{ countValue: count, countMethod: dispatch }}>
                <ReducerA />
                <ReducerB />
                <ReducerC />
            </ReducerProvider>
        </div>
  )
}

export default CounterReducer
export { ContextReducer, ReducerProvider, ReducerConsumer }
