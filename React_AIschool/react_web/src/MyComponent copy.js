// import logo from './sigongjoa.png';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { useState } from 'react';
import sigongjoa from './sigongjoa.png';
import react from './logo.svg';
import taeguk from './taeguk.png';

// const MyComponent = () => {
//     return (
//         <div className="article">This is my first Component</div>
//     )
// }

// const MyComponent = (props) => {
//     return (
//         <div className="article">This is my first {props.name} Component</div>
//     )
// }

// const MyComponent = (props) => {
//     return (
//         <div className="article">
//             This is my first {props.name} Component
//             <br />
//             태그 사이의 값은 children({props.children})으로 불러옵니다.
//         </div>
//     )
// }

// const MyComponent = (props) => {
//     const { name, children } = props;
//     // 비구조화 할당 문법 (변수 안에 여러 값을 넣음)
//     return (
//         <div className="article">
//             This is my first {name} Component
//             <br />
//             태그 사이의 값은 children({children})으로 불러옵니다.
//         </div>
//     )
// }

// const MyComponent = ({ name, favoriteNum, children }) => {
//     return (
//         <div className="article">
//             This is my first {name} Component
//             <br />
//             태그 사이의 값은 children({children})으로 불러옵니다.
//             <br />
//             제가 좋아하는 숫자는 {favoriteNum} 입니다.
//         </div>
//     )
// }

class MyComponent extends Component {
    static defaultProps = {
        name: 'defaultName'
    };

    static propTypes = {
        name: PropTypes.string,
        favoriteNum: PropTypes.number.isRequired
    };

    render() {
        const { name, favoriteNum, children } = this.props;
        return (
            <div className="article" >
                This is my first {name} Component
                <br />
                태그 사이의 값은 children({children})으로 불러옵니다.
                < br />
                제가 좋아하는 숫자는 {favoriteNum} 입니다.
            </div >
        );
    }
}

// MyComponent.defaultProps = {
//     name: 'defaultProps'
// }

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNum: PropTypes.number.isRequired
//     // 해당 값은 허용을 해줌 (무조건 해당 값을 입력해줘야 함)
// }

const Sigong1 = () => {
    const [pic, setPic] = useState(
        <img
            className='App-logo' src={sigongjoa} alt='sigong'
        />);

    const changePic1 = () => setPic(
        <img
            className='App-logo' src={sigongjoa} alt='sigong'
        />);

    const changePic2 = () => setPic(
        <img
            className='App-logo' src={react} alt='logo'
        />);

    const changePic3 = () => setPic(
        <img
            className='App-logo' src={taeguk} alt='taeguk'
        />);

    return (
        <header className="App-header">
            {pic}
            <br /><br />
            {/* <img src={{ pic }} alt='sigong'></img> */}
            <button className='img_btn1' onClick={changePic1}>SigongJoa</button>
            <button className='img_btn2' onClick={changePic2}>React</button>
            <button className='img_btn3' onClick={changePic3}>RYB</button>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
    )
}

const Sigong2 = () => {
    return (
        <div>
            <p className="article">
                <br />♚♚히어로즈 오브 더 스☆톰♚♚<br />
                가입시$$전원 카드팩☜☜뒷면100%증정※<br />
                ♜월드오브 워크래프트♜펫 무료증정￥<br />
                특정조건 §§디아블로3§§★공허의유산★초상화획득기회@@<br />
                <b>↓ ↓ 즉시이동 ↓ ↓</b>
            </p>
            <code>
                <a
                    className="App-link"
                    href="http://kr.battle.net/heroes/ko/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <b>☞ http://kr.battle.net/heroes/ko/ ☜</b>
                </a>
            </code>
        </div>
    )
}

export default MyComponent;
export { Sigong1, Sigong2 };
// 외부에서 해당 파일의 컴포넌트로 접근하기 위함