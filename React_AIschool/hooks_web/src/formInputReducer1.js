import { useReducer, useRef } from 'react';
// import './style3.css'

const FormInputReducer1 = () => {
    const initForm = {
        id: '',
        pw: '',
        pw_c: '',
        id_num1: '',
        id_num2: '',
        tel1: '',
        tel2: '',
        tel3: ''
    };

    const [state, dispatch] = useReducer(formReducer, initForm);

    const { id, pw, pw_c, id_num1, id_num2, tel1, tel2, tel3 } = state;

    const inputFocus = useRef([])
    // const inputFocus1 = useRef();
    // const inputFocus2 = useRef();
    // const inputFocus3 = useRef();
    // const inputFocus4 = useRef();
    // const inputFocus5 = useRef();
    // const inputFocus6 = useRef();
    // const inputFocus7 = useRef();
    // const inputFocus8 = useRef();

    function formReducer(state, action) {
        if (action.name === 'btn') {
            return initForm;
        } else {
            return {
                ...state,
                [action.name]: action.value
            };
        }
    }

    const onChange = e => {
        dispatch(e.target);
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (e.target.name === "id") {
                alert(
                    `입력한 ID 값 : ${id}`
                );
                inputFocus.current[1].focus()
            } else if (e.target.name === "pw") {
                alert(
                    `입력한 Password 값 : ${pw}`
                );
                inputFocus.current[2].focus()
            } else if (e.target.name === "pw_c") {
                alert(
                    `입력한 Password Comfirm 값 : ${pw_c}`
                );
                inputFocus.current[3].focus()
            } else if (e.target.name === "id_num1") {
                alert(
                    `입력한 First ID Number 값 : ${id_num1}`
                );
                inputFocus.current[4].focus()
            } else if (e.target.name === "id_num2") {
                alert(
                    `입력한 Second ID Number 값 : ${id_num2}`
                );
                inputFocus.current[5].focus()
            } else if (e.target.name === "tel1") {
                alert(
                    `입력한 First Telphone Number 값 : ${tel1}`
                );
                inputFocus.current[6].focus()
            } else if (e.target.name === "tel2") {
                alert(
                    `입력한 First Telphone Number 값 : ${tel2}`
                );
                inputFocus.current[7].focus()
            } else if (e.target.name === "tel3") {
                alert(
                    `입력한 Third Telphone Number 값 : ${tel3}`
                );
                alert(`
입력한 아이디 : ${id}
입력한 비밀번호 : ${pw}
입력한 주민등록번호 : ${id_num1} - ${id_num2}
입력한 전화번호 : ${tel1} - ${tel3} - ${tel3}
                `);
                inputFocus.current[0].focus();
                inputFocus.current[0].value = '';
                inputFocus.current[1].value = '';
                inputFocus.current[2].value = '';
                inputFocus.current[3].value = '';
                inputFocus.current[4].value = '';
                inputFocus.current[5].value = '';
                inputFocus.current[6].value = '';
                inputFocus.current[7].value = '';
            }
        }
    };


    const onClick = () => {
        alert(`
    입력한 아이디 : ${id}
    입력한 비밀번호 : ${pw}
    입력한 주민등록번호 : ${id_num1} - ${id_num2}
    입력한 전화번호 : ${tel1} - ${tel3} - ${tel3}
            `);
        inputFocus.current[0].focus();

    }

    return (
        <div className='formInput' align='center'>

            <code><h1>useReducer 연습 (if문)</h1></code>
            <br />
            <table border="5">
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
                                value={id}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                                ref={(e) => (inputFocus.current[0] = e)}
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
                                value={pw}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                                ref={(e) => (inputFocus.current[1] = e)}
                                required autoComplete="off"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th width="150px" height="30px">비밀번호 확인</th>
                        <td>
                            <input
                                type="password"
                                width="400"
                                name="pw_c"
                                placeholder="6 ~ 10, 숫자와 알파벳만 사용"
                                minLength="6"
                                maxLength="10"
                                size="30"
                                value={pw_c}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                                ref={(e) => (inputFocus.current[2] = e)}
                                required autoComplete="off"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th width="150px" height="30px">주민등록번호</th>
                        <td>
                            <input
                                type="tel"
                                size='15'
                                maxLength="6"
                                name="id_num1"
                                placeholder="6자리 숫자만 사용"
                                value={id_num1}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                                ref={(e) => (inputFocus.current[3] = e)}
                                autoComplete="off" />
                            &nbsp;&nbsp;-&nbsp;&nbsp;
                            <input
                                type="password"
                                size='15'
                                maxLength="7"
                                name="id_num2"
                                placeholder="7자리 숫자만 사용"
                                value={id_num2}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                                ref={(e) => (inputFocus.current[4] = e)}
                                required autoComplete="off"
                            />
                        </td>
                    </tr>

                    <tr>
                        <th width="150px" height="30px">전화번호</th>
                        <td>
                            <input
                                type="tel"
                                maxLength="3"
                                size="10"
                                name="tel1"
                                placeholder="3자리 숫자"
                                value={tel1}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                                ref={(e) => (inputFocus.current[5] = e)}
                                required autoComplete="off"
                            />
                            &nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;
                            <input
                                type="tel"
                                maxLength="4"
                                size="10"
                                name="tel2"
                                placeholder="4자리 숫자"
                                value={tel2}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                                ref={(e) => (inputFocus.current[6] = e)}
                                required autoComplete="off"
                            />
                            &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                            <input type="tel"
                                maxLength="4"
                                size="10"
                                name="tel3"
                                placeholder="4자리 숫자"
                                value={tel3}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                                ref={(e) => (inputFocus.current[7] = e)}
                                required autoComplete="off"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <button
                name='btn'
                onKeyPress={onKeyPress}
                onClick={onClick}
            >확인</button>
        </div>
    );
}

export default FormInputReducer1;