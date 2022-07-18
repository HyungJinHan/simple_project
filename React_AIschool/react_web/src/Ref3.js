import React, { Component } from 'react';

class Ref3 extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        // 비구조화 할당 문법

        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '500px',
            width: '1000px',
            overflow: 'auto',
            position: 'relative',
            margin: 'auto'
        };

        const innerStyle = {
            width: '100%',
            height: '1000px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div style={style} ref={(ref) => { this.box = ref }}>
                <div style={innerStyle} />
            </div>
        );
    }
}

export default Ref3;