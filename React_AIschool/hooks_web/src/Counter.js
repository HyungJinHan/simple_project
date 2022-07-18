import { useState, useEffect } from 'react';

const Counter = () => {

    const [value, setValue] = useState(
        () => JSON.parse(window.localStorage.getItem('value')) || 0
    );

    useEffect(() => {
        window.localStorage.setItem('value', JSON.stringify(value));
    }, [value]);

    const plus = () => {
        setValue(value + 1);
    }

    const minus = () => {
        setValue(value - 1);
    }

    const zero = () => {
        setValue(value * 0);
    }

    return (
        <div className='Counter'>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            <button onClick={plus}>+1</button>
            <button onClick={zero}>0</button>
            <button onClick={minus}>-1</button>
        </div>
    );
};

export default Counter;