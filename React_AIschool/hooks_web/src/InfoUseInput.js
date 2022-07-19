import React from 'react';
import useInput from './useInput';

const InfoUseInput = () => {

    const [state, onChange] = useInput({
        name: '',
        eMail: '',
        nickname: ''
    });

    const { name, eMail, nickname } = state;

    return (
        <div className='Info'>
            <h1><code>useReducer</code> 여러번 사용</h1>
            <div>
                <input
                    name='name'
                    value={name}
                    onChange={onChange}
                    autoComplete='off'
                />
                <input name='eMail'
                    value={eMail}
                    onChange={onChange}
                    autoComplete='off'
                />
                <input
                    name='nickname'
                    value={nickname}
                    onChange={onChange}
                    autoComplete='off'
                />
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

export default InfoUseInput;