/* eslint-disable */
import React, {useState} from 'react';
// React의 내장 함수인 useState를 Import함
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header className='black_h1'>
      <h1>
        개발자 Blog 추천
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav className='lists'>
      <ol>
        <li>velog를 사용할까?</li>
        <li>Tistory를 사용할까?</li>
        <li>GitHub Blog를 사용할까?</li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article className='articles'>
      <h2>개발자 Blog를 시작하려는 모두를 위해...</h2>
      어떤 플랫폼을 사용해야 하는지의 나름대로의 정보들을 정리해놓은 블로그<br />
      각각의 플랫폼의 장점과 단점을 정리했습니다.
    </article>
  ); 
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
