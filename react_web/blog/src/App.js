/* eslint-disable */
import React, {useState} from 'react';
// React의 내장 함수인 useState를 Import함
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header className='black_h1'>
      <h1>
        <a href="/" onClick={(event)=>{
          event.preventDefault();
          // click 후의 새로고침이 되지 않도록 막음
          props.onChangeMode();
        }}>
         {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lists = []
  // lists라는 변수를 배열로 지정

  for(let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lists.push(
    <li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>
      {/*
      click을 통해 각각의 id를 출력하기 위해서 a 태그에 직접 id를 부여해주고,
      event 객체가 가지고 있는 target(이벤트를 유발시킨 태그인 a)이라는 기능과
      .id(event.target.id)를 props인 onChangeMode 함수에 지정해주면,
      클릭했을 시, 해당 list의 id 값을 얻을 수 있음
      */}
       {t.title}
      </a>
    </li>
    );
  }
  // for 문을 이용해 list들을 생성해주고, lists의 배열에 push해주는 작업을
  // topics라는 변수의 배열만큼 반복시켜줌
  // react는 자동으로 생성되는 경우에는 고유의 key 값을 지정해줘서 추적이 가능하게 해야 함

  return (
    <nav className='lists'>
      <ol>
        {lists}
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article className='articles'>
      <h2>
        {props.title}
      </h2>
      {props.body1}<br/>
      {props.body2}
    </article>
  ); 
}

// Main
function App() {
  const topics = [
    { id: 1, title: 'velog를 사용할까?', body: 'velog의 장점과 단점'},
    { id: 2, title: 'Tistory를 사용할까?', body: 'Tistory의 장점과 단점' },
    { id: 3, title: 'GitHub Blog를 사용할까?', body: 'GitHub Blog의 장점과 단점' }
  ]

  return (
    <div>
      <Header title="개발자 Blog 추천" onChangeMode={()=>{
        alert('Hello!');
        }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article
      title="개발자 Blog를 시작하려는 모두를 위해..."
      body1="어떤 플랫폼을 사용해야 하는지의 나름대로의 정보들을 정리해놓은 블로그."
      body2="각각의 플랫폼의 장점과 단점을 정리했습니다."
      >
      </Article>
    </div>
  );
}

export default App;