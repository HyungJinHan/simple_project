import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss'

const TodoInsert = ({ onInsert }) => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [email, setEmail] = useState('');
    const [email_sel, setEmail_sel] = useState('');
    const [gender, setGender] = useState('');

    // const [value, setValue] = useState({
    //     id: '',
    //     pw: '',
    //     email: '',
    //     email_sel: '',
    //     gender: '',
    // });

    // const { id, pw, email, email_sel, gender } = value;



    // const onChange = useCallback(
    //     (e) => {
    //         setValue(e.target.value);
    //     }, []);

    const onChange1 = useCallback(
        (e) => {
            setId(e.target.value);
        }, []);

    const onChange2 = useCallback(
        (e) => {
            setPw(e.target.value);
        }, []);

    const onChange3 = useCallback(
        (e) => {
            setEmail(e.target.value);
        }, []);

    const onChange4 = useCallback(
        (e) => {
            setEmail_sel(e.target.value);
        }, []);

    const onChange5 = useCallback(
        (e) => {
            setGender(e.target.value);
        }, []);

    // const onChange = useCallback((e) => {
    //     const nextValue = {
    //         ...value, // form을 복사
    //         [e.target.name]: e.target.value // 복사 후, 값 덮어 씌우기
    //     };
    //     setValue(nextValue);
    // });

const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };

    const onSubmit = useCallback(
        (e) => {
            onInsert(
                `
입력한 ID : ${id}

입력한 Password : ${pw}

입력한 E-mail : ${email}@${email_sel}

입력한 성별 : ${gender}
                `
            );
            setId('');
            setPw('');
            setEmail('');
            setEmail_sel('');
            setGender('');
            e.preventDefault();
        }, [onInsert, id, pw, email, email_sel, gender]);

    return (
        <form className='TodoInsert' onKeyPress={onKeyPress}>
            <input
                placeholder='아이디를 입력하세요.'
                value={id}
                onChange={onChange1}
            />

            <br /><br />

            <input
                placeholder='비밀번호를 입력하세요.'
                value={pw}
                onChange={onChange2}
            />

            <br /><br />

            <input
                className='email'
                placeholder='이메일을 입력하세요.'
                value={email}
                onChange={onChange3}
            />

            &nbsp;&nbsp;
            @
            &nbsp;&nbsp;

            <select className='email' value={email_sel} onChange={onChange4}>
                <option value="">메일주소선택</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="naver.com">naver.com</option>
                <option value="nate.com">nate.com</option>
            </select>

            <br /><br />

            <div className='genders' value={gender}>
                <div className='gender' onChange={onChange5}>
                    <p>성별 : </p>
                    <input type="radio" name="gender" value="남자" />
                    <p>남자</p>
                </div>
                <div className='gender'>
                    <input type="radio" name="gender" value="여자" />
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
            <div className='submit_button' onSubmit={onSubmit}>
                <button>
                    <MdAdd />
                </button>
            </div>
        </form>
    );
};

export default TodoInsert;
