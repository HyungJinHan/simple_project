import { useState } from 'react';

const EventPractice1 = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = (e) => setUsername(e.target.value);
    // const onChangeMessage = (e) => setMessage(e.target.value);

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = form;

    const onChange = (e) => {
        const nextForm = {
            ...form, // form을 복사
            [e.target.name]: e.target.value // 복사 후, 값 덮어 씌우기
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(
            `사용자 명 : ${username}
이메일 : ${email}
비밀번호 : ${password}`
        );
        // setUsername('');
        // setMessage('');
        setForm({
            username: '',
            email: '',
            password: ''
        })
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div className='EventPractice'>
            <h1>이벤트 연습 (함수 컴포넌트)</h1>
            <br />
            <input
                type="text"
                name="username"
                className='message_input'
                placeholder="사용자 이름을 입력하세요."
                value={username}
                onChange={onChange}
                autoComplete='off'
            />
            <br /><br />
            <input
                type="text"
                name="email"
                className='message_input'
                placeholder="이메일을 입력하세요."
                value={email}
                onChange={onChange}
                autoComplete='off'
            />
            <br /><br />
            <input
                type="text"
                name="password"
                className='message_input'
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={onChange}
                onKeyPress={onKeyPress}
                autoComplete='off'
            />
            <br /><br />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPractice1;