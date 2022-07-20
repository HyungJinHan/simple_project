import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss'

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState({
        id: '',
        pw: '',
        email: '',
        email_sel: '',
        gender: '',
    });

    const { id, pw, email, email_sel, gender } = value;

    // const onChange = useCallback(
    //     (e) => {
    //         setValue(e.target.value);
    //     }, []);

    const onChange = useCallback(
        (e) => {
            setValue(e.target.value);
        }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        }, [onInsert, value])

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input
                placeholder='아이디를 입력하세요.'
                value={id}
                onChange={onChange}
            />
            <br /><br />
            <input
                placeholder='비밀번호를 입력하세요.'
                value={pw}
                onChange={onChange}
            />
            <br /><br />
            <input
                className='email'
                placeholder='이메일을 입력하세요.'
                value={email}
                onChange={onChange}
            />
            &nbsp;&nbsp;
            @
            &nbsp;&nbsp;
            <select className='email' value={email_sel} onChange={onChange}>
                <option value="">메일주소선택</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="naver.com">naver.com</option>
                <option value="nate.com">nate.com</option>
            </select>
            <br /><br />
            <div className='genders' value={gender}>
                <div className='gender'>
                    <p>성별 : </p>
                    <input onChange={onChange} type="radio" name="gender" value="남자" />
                    <p>남자</p>
                </div>
                <div className='gender'>
                    <input onChange={onChange} type="radio" name="gender" value="여자" />
                    <p>여자</p>
                </div>
            </div>
            {/* <div className='gender'>

            </div> */}
            {/* <input
                placeholder='할 일을 입력하세요.'
                value4={value}
                onChange={onChange5}
            /> */}
            <div className='submit_button'>
                <button>
                    <MdAdd />
                </button>
            </div>
        </form>
    );
};

export default TodoInsert;