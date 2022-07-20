import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './ToDoInsert.scss';

const ToDoInsert = ({ onInsert }) => {
    // const [value, setValue] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [email, setEmail] = useState('');
    const [email_sel, setEmail_sel] = useState('');
    const [gender, setGender] = useState('');

    // const onChange = useCallback(
    //     (e) => {
    //         if (e.name === 'id') {
    //             setId(e.target.value);
    //         } else if (e.name === 'pw') {
    //             setPw(e.target.value);
    //         } else if (e.name === 'pw') {
    //             setPw(e.target.value);
    //         } else if (e.name === 'email') {
    //             setEmail(e.target.value);
    //         } else if (e.name === 'email_sel') {
    //             setEmail_sel(e.target.value);
    //         } else if (e.name === 'gender') {
    //             setGender(e.target.value);
    //         }
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

    const onSubmit = useCallback(
        (e) => {
            onInsert(
                <table border="2">
                    <tbody>
                        <tr>
                            <th width="200px" height="30px">아이디</th>
                            <td width="500px">
                                {id}
                            </td>
                        </tr>
                        <tr>
                            <th width="150px" height="30px">비밀번호</th>
                            <td>
                                {pw}
                            </td>
                        </tr>
                        <tr>
                            <th width="150px" height="30px">이메일</th>
                            <td>
                                {email}
                                @
                                {email_sel}
                            </td>
                        </tr>
                        <tr>
                            <th width="150px" height="30px">성별</th>
                            <td>
                                {gender}
                            </td>
                        </tr>
                    </tbody>
                </table>
                //                 `
                // 입력한 아이디 : ${id}
                // 입력한 비밀번호 : ${pw}
                // 입력한 이메일 : ${email} @ ${email_sel}
                // 입력한 성별 : ${gender}
                //             `
            );
            setId('');
            setPw('');
            setEmail('');
            setEmail_sel('');
            setGender(false);
            e.preventDefault();
            // submit을 클릭할 시 새로고침 방지
        }, [onInsert, id, pw, email, email_sel, gender]);

    return (
        <form
            className='ToDoInsert'
            onSubmit={onSubmit}
        >
            {/* <input
                placeholder='할 일을 입력하세요.'
                value={value}
                onChange={onChange}
            /> */}
            <table>
                <tbody>
                    <tr>
                        <th width="200px" height="30px">아이디</th>
                        <td width="500px">
                            <input
                                type="text"
                                width="400"
                                name="id"
                                placeholder="6 ~ 10, 숫자와 알파벳만 사용"
                                minLength="6"
                                maxLength="10"
                                size="30"
                                onChange={onChange1}
                                value={id}
                                required autoComplete="off"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th width="150px" height="30px">비밀번호</th>
                        <td>
                            <input
                                type="password"
                                width="400"
                                name="pw"
                                placeholder="6 ~ 10, 숫자와 알파벳만 사용"
                                minLength="6"
                                maxLength="10"
                                size="30"
                                onChange={onChange2}
                                value={pw}
                                required autoComplete="off"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th width="150px" height="30px">이메일</th>
                        <td>
                            <input
                                className='email'
                                placeholder='이메일을 입력하세요.'
                                onChange={onChange3}
                                value={email}
                            />
                            &nbsp;@&nbsp;
                            <select
                                className='email_sel'
                                name='email_sel'
                                onChange={onChange4}
                                value={email_sel}
                            >
                                <option value="">메일주소선택</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="naver.com">naver.com</option>
                                <option value="nate.com">nate.com</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th width="150px" height="30px">성별</th>
                        <td className='genders'>
                            <input
                                type='radio'
                                name='gender'
                                value='남자'
                                className='gender_man'
                                onChange={onChange5}
                            /><p className='man'>남자</p>
                            <input
                                type='radio'
                                name='gender'
                                value='여자'
                                className='gender_woman'
                                onChange={onChange5}
                            /><p className='woman'>여자</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button>
                <MdAdd />
            </button>
        </form>
    );
};

export default ToDoInsert;