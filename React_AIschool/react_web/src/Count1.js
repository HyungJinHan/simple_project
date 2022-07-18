import { useState, useEffect } from 'react';

function Count1() {
    const [count, setCount] = useState(
        () => JSON.parse(window.localStorage.getItem('count')) || 0
    );

    useEffect(() => {
        window.localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    return (
        <div className='count'>
            <h1><code>localStorage</code></h1>
            <h1>{count}</h1>
            <button className='btn'
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                👍
            </button>

            <button className='btn_zero'
                onClick={() => {
                    setCount(count * 0)
                }}
            >
                ⛔
            </button>

            <button className='btn'
                onClick={() => {
                    setCount(count - 1)
                }}
            >
                👎
            </button>
        </div>
    );
}

export default Count1;