import './App.css';
// import Component from 'react';
import logo from './sigongjoa.png';

// function App() {
//   const name = undefined;

//   const style = {
//     textDecoration: 'none',
//     backgroundColor: '#282c34',
//     color: 'white',
//     textAlign: 'center',
//     paddingTop: '10vh'
//   };

//   return (
//     <div>
//       {name || (<h1>값이 undefined입니다.</h1>)}
//       {/* css를 이용한 스타일링 */}
//       <div>
//         {name || (<h1 style={style}>값이 undefined입니다.</h1>)}
//         {/* 변수를 이용한 스타일링 */}
//       </div>
//     </div>
//   );
// }

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  )
}

function Article() {
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

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Article></Article>
    </div>
  );
}

export default App;
// default가 없는 경우, import 시 {}를 사용해야 함
// default가 있는 경우, import 시 {}를 생략하고 사용가능