import React, {useState} from 'react';
// React의 내장 함수인 useState를 Import함
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, title_change] = useState(['개발자 Blog 플랫폼 추천', ' by.HyungJin']);
  // state 문법은 변수 대신 쓰는 데이터 저장 공간으로 useState()를 이용해 사용
  // useState는 [state 데이터, state 데이터 변경 함수]로 쓰임
  // 변수를 array 형식으로 지정해야 함

  // array를 이용한 변수 지정 (ES6 destructuring 문법)
  // var [a, b] = [10, 100];
  // a = 10, b = 100

  let posts_article = 'posts article입니다.';

  let posts = '개발자 Blog';
  // 변수를 지정 후, 이 변수를 넣고 싶은 곳에 {변수}로 넣어주면 됨

  let posts_style = { color: 'white', fontSize: '30px' };
  // style도 변수로 지정 가능

  function posts_f() {
    return '플랫폼 추천';
  }
  // 함수도 변수로 지정 후, 사용 가능

  return (
    <div className="App">
     {/* class라는 예약어가 있기 때문에 class 지정을 className으로 함*/}
      <div className="black-nav">
        <div style={posts_style}>React 연습 Blog</div>
        {/* style 지정도 가능 */}
      </div>
      <img width={'50%'} src={logo}/>
      {/* 원하는 이미지를 import 해온 후, {}안에 이미지 이름을 지정 */}
      {/* 일반적인 html의 이미지명.jpg도 사용 가능 */}
      <div className='list'>
        <h4 className={posts_article}>{title[0]}{title[1]}</h4>
        {/* className에도 변수 지정 가능 */}
        <p>2022.07.02 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
