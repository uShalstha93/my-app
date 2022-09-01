import React from 'react';
import { useState } from 'react';

const Test = () => {
    
    const [count, setCount] = useState(0)

    const incrementFunc = () => {
        if(count >= 10 && count <= 20){
            if(count !== 20){
                setCount(count + 2)
            }
            else{
                setCount(20)
            }
        }
        else{
            setCount(count + 1)
        }
    }

    return (
        <div>
            <h1>Hello CodeSandbox</h1>
            <h2>You clicked {count} times!</h2>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => incrementFunc()}>Increment</button>
        </div>
    );
}

export default Test;