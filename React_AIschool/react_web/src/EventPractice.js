import { Component } from 'react';

// class EventPractice extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무 내용을 입력하세요."
//                     onChange={
//                         (e) => {
//                             console.log(e.target.value);
//                         }
//                     }
//                 />
//             </div>
//         );
//     }

// };

class EventPractice extends Component {
    state = {
        username: "",
        message: ""
        // 초기값은 공백
    }

    // constructor(props) {
    //     super(props);
    //     // 부모 요소
    //     this.handleChange = this.handleChange.bind(this);
    //     // super의 요소를 가져온 handleChange를 바인딩 작업
    //     // (this)와 handleChange를 맵핑 시켜주는 역할
    //     this.handleClick = this.handleClick.bind(this);
    //     // super의 요소를 가져온 handleClick를 바인딩 작업
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //         // 공백인 state의 변경된 값을 input에 전달
    //     });
    // }

    // handleClick(e) {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //         // 클릭 이벤트 후, input 공백 처리
    //     });
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            // 공백인 state의 변경된 값을 input에 전달
        });
    }

    handleClick = () => {
        alert(
            `사용자 명 : ${this.state.username}
입력한 메세지 : ${this.state.message}`);

        this.setState({
            username: '',
            message: ''
            // 클릭 이벤트 후, input 공백 처리
        });
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    // handleFocus = (e) => {
    //     if (e.key === 'Enter') {
    //         this.message.focus();
    //     }
    // }

    render() {
        return (
            // <div>
            //     <h1>이벤트 연습</h1>
            //     <input
            //         type="text"
            //         name="message"
            //         placeholder="아무 내용을 입력하세요."
            //         value={this.state.message}
            //         onChange={
            //             (e) => {
            //                 this.setState({
            //                     message: e.target.value
            //                 });
            //             }
            //         }
            //     />
            //     <button
            //         onClick={
            //             () => {
            //                 alert(this.state.message);
            //                 this.setState({
            //                     message: ""
            //                 });
            //             }
            //         }
            //     >
            //         확인
            //     </button>
            // </div>

            <div className='EventPractice'>
                <h1>이벤트 연습 (Class 컴포넌트)</h1>
                <br />
                <input
                    type="text"
                    name="username"
                    className='message_input'
                    placeholder="사용자 이름을 입력하세요."
                    value={this.state.username}
                    onChange={this.handleChange}
                    onKeyPress={this.handleFocus}
                />
                <br /><br />
                <input
                    type="text"
                    name="message"
                    className='message_input'
                    placeholder="아무 내용을 입력하세요."
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleEnter}
                />
                <br /><br />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
};

export default EventPractice;