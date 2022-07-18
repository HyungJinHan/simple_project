import React, { Component } from 'react';

class Ref1 extends Component {

    state = {
        pw: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            pw: e.target.value
        });
    }

    input = React.createRef();

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.pw === '0000'
        });
        this.input.current.focus();
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.handleButtonClick();
        }
    }

    render() {
        return (
            <div className='ref'>
                <input
                    type='password'
                    value={this.state.pw}
                    onChange={this.handleChange}
                    onKeyPress={this.handleEnter}
                    ref={this.input}
                    // 콜백 함수 사용 시, current 사용 X
                    className={
                        this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''
                    }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default Ref1;