import React, { ReactElement } from 'react';
import { useReducer } from 'react';

const initialState = {
  counter: 100
};

type ACTION_TYPES =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number };

const counterReducer = (state: typeof initialState, action: ACTION_TYPES) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case 'decrement':
      return {
        ...state,
        counter: state.counter - action.payload
      };

    default:
      throw new Error('Undefined Action');
  }
};

function UseReducerComponent (): ReactElement {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <div>{state.counter}</div>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        INCREMENT
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>
        DECREMENT
      </button>
    </div>
  );
}

export default UseReducerComponent;
