import React, { Component } from 'react';

class LifeCycle extends Component {
    state = {
        number: 0,
        color: null
    }
    // 첫 값 지정

    myRef = null;
    // ref를 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor')
    }
    // 부모로부터 상속받은 값

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return {
                color: nextProps.color
            };
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
        // 숫자의 마지막 자리가 4이면 리렌더링을 하지 않음
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트 되기 직전의 색상 : ', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return (
            <div className='lifeCycle'>
                {/* {this.props.missing.value} */}
                <h1 style={style} ref={ref => (this.myRef = ref)}>{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button className='lifeCycle' onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycle;