import { useStore } from '@nanostores/react';
import { counterE, counterE2 } from '../test.js';  

function Counter() {
    const $count = useStore(counterE);
    const $count2 = useStore(counterE2);
    
    function increment() {
        counterE.set($count + 1);
        console.log($count)
    }
    return (
        <div>
            <p>Count: {$count}</p>
            <button onClick={increment}> Increment </button>
            {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
        </div>
    );
}

export default Counter;
