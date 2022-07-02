/* eslint-disable */
import React, {useState} from 'react';
// React의 내장 함수인 useState를 Import함
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, title_change] = useState(['velog를 사용할까?', 'Tistory를 사용할까?', 'GitHub Blog를 사용할까?']);
  // state 문법은 변수 대신 쓰는 데이터 저장 공간으로 useState()를 이용해 사용
  // useState는 [state 데이터, state 데이터 변경 함수]로 쓰임
  // 변수를 array 형식으로 지정해야 함

  // array를 이용한 변수 지정 (ES6 destructuring 문법)
  // var [a, b] = [10, 100];
  // a = 10, b = 100

  function other_title() {
    var new_title = [...title]; // 참조형(값 공유)이 아닌 온전한 복사본을 만들기 위한 작업
    new_title[0] = 'velog로 할까?';
    title_change(new_title);
    // 새로운 변수에 title 이라는 state를 복사 후, 그 변수의 array의 값을 수정하는 식으로도 사용 가능
    // title_change(['velog로 할까?', 'Tistory를 할까?', 'GitHub Blog를 할까?']);
  }

  let [like_num, like_count] = useState(0);

  let posts_title = 'posts title입니다.';

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
        <div style={posts_style}>개발자 Blog 추천</div>
        {/* style 지정도 가능 */}
      </div>
      <img width={'50%'} src={logo} onClick={other_title}/>
      {/* 따로 함수를 지정 후, state의 데이터 변경 내용을 지정하고 함수를 입력해도 됨 */}
      {/* other_title()로 입력할 경우 곧바로 함수가 실행되기 때문에 ()는 입력 X */}
      {/* 원하는 이미지를 import 해온 후, {}안에 이미지 이름을 지정 */}
      {/* 일반적인 html의 이미지명.jpg도 사용 가능 */}
      <div className='list'>
        <h3 className={posts_title}>
          {title[0]} <span className="like" onClick={() => {like_count(like_num + 1)}}>👍</span> {like_num}
        </h3>
        {/* ES6에 추가된 함수 표현으로 ()=>{}로 간단하게 함수 표현 */}
        {/* state의 데이터 변경 사용을 위해서는 함수 형태로 사용해야 함 */}
        {/* className에도 변수 지정 가능 */}
        <p>velog의 장점은?</p>
        <p>velog의 단점은?</p>
        <hr/>
      </div>
      <div className='list'>
        <h3 className={posts_title}>
          {title[1]}
        </h3>
        {/* className에도 변수 지정 가능 */}
        <p>Tistory의 장점은?</p>
        <p>Tistory의 단점은?</p>
        <hr />
      </div>
      <div className='list'>
        <h3 className={posts_title}>
          {title[2]}
        </h3>
        {/* className에도 변수 지정 가능 */}
        <p>GitHub Blog의 장점은?</p>
        <p>GitHub Blog의 단점은?</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
