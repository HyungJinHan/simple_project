import { Component } from 'react';

// class Count extends Component {
//     constructor(props) {
//         super(props);
//         // Component의 기능을 상속받은 부모
//         this.state = {
//             number: 0,
//             fixedNum: 0
//             // state의 초깃값 설정
//         };
//     }

class Count extends Component {
    state = {
        number: 0,
        fixedNum: 0,
        multiNum: 0
        // state의 초깃값 설정
    };

    render() {
        const { number, fixedNum, multiNum } = this.state;
        return (
            <div className='count'>
                <h1>{number}</h1>
                <h2>number x 10 : {multiNum}</h2>
                <h2>바뀌지 않는 값 : {fixedNum}</h2>
                <button className='btn'
                    onClick={() => {
                        // this.setState({ number: number + 1, multiNum: number * 10 });
                        // this.setState((prevState) => {
                        //     return {
                        //         number: prevState.number + 1
                        //     };
                        // });
                        // this.setState((prevState) => ({
                        //     number: prevState.number + 1,
                        //     multiNum: (number + 2) * 10
                        // }));
                        this.setState(
                            {
                                number: number + 1,
                                multiNum: (number + 1) * 10
                            },
                            () => {
                                // 클릭할 시, 콜백 함수로써 출력

                                console.log('setState가 호출되었습니다.');
                                // 결과 : setState가 호출되었습니다.

                                console.log(this.state);
                                // 결과 : {number: 8, fixedNum: 0, multiNum: 80}
                            }
                        );
                    }}
                >
                    👍
                </button>
            </div>
        );
    }
}

export default Count;