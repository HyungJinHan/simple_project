import logo from './sigongjoa.png';
import './App.css';
// import {Fragment} from 'react'

function App() {
  const name = 'React';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload.
           */}
          <br />♚♚히어로즈 오브 더 스☆톰♚♚<br />
          가입시$$전원 카드팩☜☜뒷면100%증정※<br />
          ♜월드오브 워크래프트♜펫 무료증정￥<br />
          특정조건 §§디아블로3§§★공허의유산★초상화획득기회@@<br /><br />
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
      </header>
      {name === '리액트' ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h1>리액트가 아닙니다.</h1>
      )}
    </div>
  );
}

export default App;
