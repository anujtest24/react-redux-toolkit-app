import React from 'react';
import useIncrementCounter from '../../customHooks/MyCounterHook'

function MyCounter(props) {
   const [count,increment]= useIncrementCounter(2)
    return (
        <div>
            {count}
            <button onClick={() => increment()}>Increment</button>
        </div>
    );
}

export default MyCounter;