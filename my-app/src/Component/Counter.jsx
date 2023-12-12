import React, { useState } from 'react';

function Counter() {
    var[count, setCount] = useState(0);

    const changeCount = (val) => {
        setCount(count + val);
    }
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => changeCount(1)}>Increment</button>
            <button onClick={() => changeCount(-1)}>Decrement</button>
        </div>
    );
}

export default Counter;