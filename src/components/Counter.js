import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    }


    return (
        <div >
            <button onClick={handleClick}> Click Me</button>
            <p> Button clicked {count} times</p>
        </div>
    )
}

export default Counter