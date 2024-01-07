import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Action';

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)

    // console.log(increment());
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Counter;