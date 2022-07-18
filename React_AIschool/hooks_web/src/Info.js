import React from 'react';
import { useState, useEffect } from 'react';

const Info = () => {
    const [form, setForm] = useState({
        name: '',
        nickname: '',
        eMail: ''
    });

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    };

    useEffect(() => {
        console.log('Effect');
        // input에 입력 값이 렌더링 될 때 마다 입력한 내용과 해당 내용이 함께 출력
        // mount가 완료된 시점에서 출력
        // 1234 입력 시, 입력한 모든 값이 출력
        console.log({
            name,
        });

        // console.log(name);

        return () => {
            console.log('Clean Up');
            // 입력한 값보다 한 단계 느리게 출력
            console.log(name);
        };
    }, [form.name]);
    // 원하는 값을 지정해서 리렌더링 하기

    const { name, eMail, nickname } = form;

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