import React from 'react';
import { useState, useEffect } from 'react';

const Info = () => {
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // };

    const [form, setForm] = useState({
        name: '',
        nickname: '',
        eMail: ''
    });

    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        // input에 입력 값이 렌더링 될 때 마다 입력한 내용과 해당 내용이 함께 출력
        // mount가 완료된 시점에서 출력
        console.log({
            name,
            eMail,
            nickname
        });
    });

    const { name, eMail, nickname } = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    };

    return (
        <div className='Info'>
            <h1><code>useState</code> 여러번 사용</h1>
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

export default Info;