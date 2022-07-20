import React, { useState } from 'react';

const TodoUpdate = (props) => {
    const [id, setId] = useState(props.id);
    const [pw, setPw] = useState(props.pw);
    const [email, setEmail] = useState(props.email);
    const [email_sel, setEmail_sel] = useState(props.email_sel);
    const [gender, setGender] = useState(props.gender);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const id = event.target.id.value;
            const pw = event.target.pw.value;
            const email = event.target.email.value;
            const email_sel = event.target.email_sel.value;
            const gender = event.target.gender.value;
            props.onUpdate(id, pw, email, email_sel, gender);
        }}>
            <p>
                <input type="text" name='id' className='update_input' placeholder='아이디를 입력하세요.' value={id} onChange={(event) => {
                    setId(event.target.value);
                }} />
            </p>
            <p>
                <input type="text" name='pw' className='update_input' placeholder='비밀번호를 입력하세요.' value={pw} onChange={(event) => {
                    setPw(event.target.value);
                }} />
            </p>
            <p>
                <input type="text" name='email' className='update_input' placeholder='이메일을 입력하세요.' value={email} onChange={(event) => {
                    setEmail(event.target.value);
                }} />
            </p>
            <p>
                <input type="radio" name='email_sel' value={email_sel} onChange={(event) => {
                    setEmail_sel(event.target.value);
                }} />
            </p>
            <p>
                <select className='email' value={email_sel}
                    onChange={(event) => {
                        setEmail_sel(event.target.value);
                    }}>
                </select>
            </p>
            <p>
                <input type="radio" name='gender' value={gender} onChange={(event) => {
                    setGender(event.target.value);
                }} />
            </p>
        </form>
    );
};

export default TodoUpdate;