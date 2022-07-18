import React, { Component } from 'react';

class Ref2 extends Component {

    input = React.createRef();
    // input에 ref를 생성하도록 지정

    handleFocus = () => {
        this.input.current.focus();
        // ref를 적용시킨 input 태그를 의미
    }

    render() {
        return (
            <div>
                <input ref={this.input} />
                {/* 위에서 ref 생성을 통해 input 태그에 적용 */}
            </div>
        );
    }
}

export default Ref2;