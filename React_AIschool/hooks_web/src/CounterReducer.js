import { useReducer } from 'react';

const CounterReducer = () => {

    function reducer(state, action) {
        if (action.type === 'INCREASE') {
            return {
                value: state.value + 1
            };
        } else if (action.type === 'DECREASE') {
            return {
                value: state.value - 1
            };
        } else if (action.type === 'ZERO') {
            return {
                value: state.value * 0
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

    const [state, dispatch] = useReducer(
        reducer,
        { value: 0 }
    );

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
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={increase}>+1</button>
            <button onClick={zero}>0</button>
            <button onClick={decrease}>-1</button>
        </div>
    );
};

export default CounterReducer;