import { useReducer, useEffect } from 'react';

const CounterReducer = () => {
    const [state, dispatch] = useReducer(
        reducer,
        { value1: 0 }
    );

    useEffect(() => {
        window.localStorage.setItem('value1', JSON.stringify(state.value1));
    }, [state]);

    function reducer(state, action) {
        if (action.type === 'INCREASE') {
            return {
                value1: parseInt(JSON.parse(window.localStorage.getItem('value1'))) + 1
            };
        } else if (action.type === 'DECREASE') {
            return {
                value1: parseInt(JSON.parse(window.localStorage.getItem('value1'))) - 1
            };
        } else if (action.type === 'ZERO') {
            return {
                value1: parseInt(JSON.parse(window.localStorage.getItem('value1'))) * 0
            };
        } else {
            return state;
        }
        //     switch (action.type) {
        //         case 'INREMENT':
        //             return {
        //                 value: state.value + 1
        //             };
        //         case 'DECREMENT':
        //             return {
        //                 value: state.value - 1
        //             };
        //         default:
        //             return state;
        //     }
    }

    const increase = () => {
        dispatch({
            type: 'INCREASE'
        });
    };

    const decrease = () => {
        dispatch({
            type: 'DECREASE'
        });
    };

    const zero = () => {
        dispatch({
            type: 'ZERO'
        });
    };

    return (
        <div className='Counter'>
            <p>
                현재 카운터 값은 <b>{window.localStorage.getItem('value1')}</b>입니다.
            </p>
            <button onClick={increase}>+1</button>
            <button onClick={zero}>0</button>
            <button onClick={decrease}>-1</button>
        </div>
    );
};

export default CounterReducer;