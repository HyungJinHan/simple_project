import React from 'react';
import { useReducer } from 'react';

const InfoReducer = () => {
    function reducer(state, action) {
        return {
            ...state,
            [action.name]: action.value
        };
    }

    const [state, dispatch] = useReducer(
        reducer, {
        name: '',
        eMail: '',
        nickname: ''
    });

    const { name, eMail, nickname } = state;

    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div className='Info'>
            <h1><code>useReducer</code> 여러번 사용</h1>
            <div>
                <input name='name' onChange={onChange} autoComplete='off' />
                <input name='eMail' onChange={onChange} autoComplete='off' />
                <input name='nickname' onChange={onChange} autoComplete='off' />
            </div>
            <div>
                <div>
                    <code><b>Name : </b> {name}</code>
                </div>
                <div>
                    <code><b>E-mail : </b> {eMail}</code>
                </div>
                <div>
                    <code><b>Nickname : </b> {nickname}</code>
                </div>
            </div>
        </div >
    );
};

export default InfoReducer;