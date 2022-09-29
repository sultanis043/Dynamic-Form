import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {

    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({ type: 'INC' })
    };
    const decrement = () => {
        dispatch({ type: 'DEC' })
    };
    const addBy = () => {
        dispatch({ type: 'ADD', payload: 10 })
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addBy}>ADD_BY</button>
        </div>
    )

}
export default Counter;