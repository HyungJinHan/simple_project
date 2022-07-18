import { useReducer } from 'react';
// import './style3.css'

const FormInputReducer = () => {
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

    const onClick1 = () => {
        alert(
            `입력한 ID 값 : ${id}`
        );
    };

    const onClick2 = () => {
        alert(
            `입력한 Password 값 : ${pw}`
        );
    };

    const onClick3 = () => {
        alert(
            `입력한 Password Comfirm 값 : ${pw_c}`
        );
    };

    const onClick4 = () => {
        alert(
            `입력한 First ID Number 값 : ${id_num1}`
        );
    };

    const onClick5 = () => {
        alert(
            `입력한 Second ID Number 값 : ${id_num2}`
        );
    };

    const onClick6 = () => {
        alert(
            `입력한 First Telphone Number 값 : ${tel1}`
        );
    };

    const onClick7 = () => {
        alert(
            `입력한 Second Telphone Number 값 : ${tel2}`
        );
    };

    const onClick8 = () => {
        alert(
            `입력한 Third Telphone Number 값 : ${tel3}`
        );

        alert(`
입력한 아이디 : ${id}
입력한 비밀번호 : ${pw}
입력한 주민등록번호 : ${id_num1} - ${id_num2}
입력한 전화번호 : ${tel1} - ${tel3} - ${tel3}
        `);
    }

    const onKeyPress1 = (e) => {
        if (e.key === 'Enter') {
            onClick1();
        }
    };

    const onKeyPress2 = (e) => {
        if (e.key === 'Enter') {
            onClick2();
        }
    };

    const onKeyPress3 = (e) => {
        if (e.key === 'Enter') {
            onClick3();
        }
    };

    const onKeyPress4 = (e) => {
        if (e.key === 'Enter') {
            onClick4();
        }
    };

    const onKeyPress5 = (e) => {
        if (e.key === 'Enter') {
            onClick5();
        }
    };

    const onKeyPress6 = (e) => {
        if (e.key === 'Enter') {
            onClick6();
        }
    };

    const onKeyPress7 = (e) => {
        if (e.key === 'Enter') {
            onClick7();
        }
    };


    const onKeyPress8 = (e) => {
        if (e.key === 'Enter') {
            onClick8();
        }
    };

    return (
        <div className='formInput' align='center'>

            <h1>이벤트 연습 (함수 컴포넌트)</h1>
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
                                onKeyPress={onKeyPress1}
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
                                onKeyPress={onKeyPress2}
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
                                onKeyPress={onKeyPress3}
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
                                onKeyPress={onKeyPress4}
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
                                onKeyPress={onKeyPress5}
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
                                onKeyPress={onKeyPress6}
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
                                onKeyPress={onKeyPress7}
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
                                onKeyPress={onKeyPress8}
                                required autoComplete="off"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <button name='btn' onClick={onClick8}>확인</button>
        </div>
    );
}

export default FormInputReducer;