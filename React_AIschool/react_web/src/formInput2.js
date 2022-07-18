// import { useState } from 'react';
import React, { Component } from 'react';

class FormInput2 extends Component {
    state = {
        id: '',
        pw: '',
        pw_c: '',
        id_num1: '',
        id_num2: '',
        tel1: '',
        tel2: '',
        tel3: ''
    }

    // input1 = React.createRef();
    input2 = React.createRef();
    input3 = React.createRef();
    input4 = React.createRef();
    input5 = React.createRef();
    input6 = React.createRef();
    input7 = React.createRef();
    input8 = React.createRef();

    // handleFocus1 = () => {
    //     this.input1.current.focus();
    // }

    handleFocus2 = () => {
        this.input2.current.focus();
    }
    handleFocus3 = () => {
        this.input3.current.focus();
    }

    handleFocus4 = () => {
        this.input4.current.focus();
    }

    handleFocus5 = () => {
        this.input5.current.focus();
    }

    handleFocus6 = () => {
        this.input6.current.focus();
    }

    handleFocus7 = () => {
        this.input7.current.focus();
    }

    handleFocus8 = () => {
        this.input8.current.focus();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            // 공백인 state의 변경된 값을 input에 전달
        });
    }

    handleClick1 = () => {
        alert(
            `입력한 ID 값 : ${this.state.id}`
        );
        this.input2.current.focus();
    }

    handleClick2 = () => {
        alert(
            `입력한 Password 값 : ${this.state.pw}`
        );
        this.input3.current.focus();
    }

    handleClick3 = () => {
        alert(
            `입력한 Password Comfirm 값 : ${this.state.pw_c}`
        );
        this.input4.current.focus();
    }

    handleClick4 = () => {
        alert(
            `입력한 First ID Number 값 : ${this.state.id_num1}`
        );
        this.input5.current.focus();
    }

    handleClick5 = () => {
        alert(
            `입력한 Second ID Number 값 : ${this.state.id_num2}`
        );
        this.input6.current.focus();
    }

    handleClick6 = () => {
        alert(
            `입력한 First Telphone Number 값 : ${this.state.tel1}`
        );
        this.input7.current.focus();
    }

    handleClick7 = () => {
        alert(
            `입력한 Second Telphone Number 값 : ${this.state.tel2}`
        );
        this.input8.current.focus();
    }

    handleClick8 = () => {
        alert(
            `입력한 Third Telphone Number 값 : ${this.state.tel3}`
        );
        alert(`
입력한 아이디 : ${this.state.id}
입력한 비밀번호 : ${this.state.pw}
입력한 주민등록번호 : ${this.state.id_num1} - ${this.state.id_num2}
입력한 전화번호 : ${this.state.tel1} - ${this.state.tel3} - ${this.state.tel3}`
        );

        this.setState({
            id: '',
            pw: '',
            pw_c: '',
            id_num1: '',
            id_num2: '',
            tel1: '',
            tel2: '',
            tel3: ''
            // 클릭 이벤트 후, input 공백 처리
        });
    }


    handleEnter1 = (e) => {
        if (e.key === 'Enter') {
            this.handleClick1();
        }
    }

    handleEnter2 = (e) => {
        if (e.key === 'Enter') {
            this.handleClick2();
        }
    }

    handleEnter3 = (e) => {
        if (e.key === 'Enter') {
            this.handleClick3();
        }
    }

    handleEnter4 = (e) => {
        if (e.key === 'Enter') {
            this.handleClick4();
        }
    }

    handleEnter5 = (e) => {
        if (e.key === 'Enter') {
            this.handleClick5();
        }
    }

    handleEnter6 = (e) => {
        if (e.key === 'Enter') {
            this.handleClick6();
        }
    }

    handleEnter7 = (e) => {
        if (e.key === 'Enter') {
            this.handleClick7();
        }
    }

    handleEnter8 = (e) => {
        if (e.key === 'Enter') {
            this.handleClick8();
        }
    }

    render() {
        return (
            <div className='formInput'>
                <h1>이벤트 연습 (Class 컴포넌트)</h1>
                <br />
                <table border="2">
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
                                    value={this.state.id}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleEnter1}
                                    ref={this.input}
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
                                    value={this.state.pw}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleEnter2}
                                    ref={this.input2}
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
                                    value={this.state.pw_c}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleEnter3}
                                    ref={this.input3}
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
                                    value={this.state.id_num1}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleEnter4}
                                    ref={this.input4}
                                    autoComplete="off" />
                                &nbsp;&nbsp;-&nbsp;&nbsp;
                                <input
                                    type="password"
                                    size='15'
                                    maxLength="7"
                                    name="id_num2"
                                    placeholder="7자리 숫자만 사용"
                                    value={this.state.id_num2}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleEnter5}
                                    ref={this.input5}
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
                                    value={this.state.tel1}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleEnter6}
                                    ref={this.input6}
                                    required autoComplete="off"
                                />
                                &nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;
                                <input
                                    type="tel"
                                    maxLength="4"
                                    size="10"
                                    name="tel2"
                                    placeholder="4자리 숫자"
                                    value={this.state.tel2}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleEnter7}
                                    ref={this.input7}
                                    required autoComplete="off"
                                />
                                &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                                <input type="tel"
                                    maxLength="4"
                                    size="10"
                                    name="tel3"
                                    placeholder="4자리 숫자"
                                    value={this.state.tel3}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleEnter8}
                                    ref={this.input8}
                                    required autoComplete="off"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br /><br />
                <button onClick={this.handleClick8}>확인</button>
            </div>
        );
    }
}

export default FormInput2;