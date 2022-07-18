import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INREMENT':
            return {
                value: state.value + 1
            };
        case 'DECREMENT':
            return {
                value: state.value - 1
            };
        default:
            return state;
    }
}

const CounterReducer = () => {

    const [state, dispatch] = useReducer(
        reducer,
        { value: 0 }
    );

    const plus = () => {
        dispatch({
            type: 'INREMENT'
        });
    };

    const minus = () => {
        dispatch({
            type: 'DECREMENT'
        });
    };

    return (
        <div className='Counter'>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </div>
    );
};

export default CounterReducer;