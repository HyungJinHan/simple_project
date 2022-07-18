import './App.css';
import { Component } from 'react';
import MyComponent from './MyComponent';
import { Sigong1, Sigong2 } from './MyComponent';
import Count from './Count';
import Say from './Say.js';
import EventPractice from './EventPractice.js';
import EventPractice1 from './EventPractice1.js';
import Count1 from './Count1.js'
import FormInput from './formInput1.js';
import FormInput2 from './formInput2.js';
import Ref1 from './Ref1.js';
import Ref2 from './Ref2.js';
import Ref3 from './Ref3.js';
import Ref4 from './Ref4.js';
import Iteraction from './Iteraction.js';
import Iteraction1 from './Iteraction1.js';
import LifeCycle from './LifeCycle';
import LifeCycleApp from './LifeCycleApp';

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


// const App = () => {
//   return (
// <div>
//   <Count />
//   <br />
//   <MyComponent name={"리액트"} favoriteNum={3}>React</MyComponent>
//   {/*This is my first 리액트 Component
//     태그 사이의 값은 children(리액트)으로 불러옵니다.
//     제가 좋아하는 숫자는 3 입니다. */}
//   <br />
//   <Sigong1 />
//   <br />
//   <Sigong2 />
// </div>
//   );
// }

const App = () => {
  return (
    <div>
      <br />
      <Say />
      <Count />
      <br />
      <Count1 />
      <br />
      <MyComponent name={"리액트"} favoriteNum={0}>React</MyComponent>
      {/*This is my first 리액트 Component
        태그 사이의 값은 children(리액트)으로 불러옵니다.
        제가 좋아하는 숫자는 0 입니다. */}
      <br />
      <Sigong1 />
      <br />
      <Sigong2 />
      <br />
      <EventPractice />
      <br />
      <EventPractice1 />
      <br />
      <FormInput />
      <br />
      <FormInput2 />
      <br />
      <Ref1 />
      <br />
      <Ref2 />
      <br />
      <Ref3 />
      <br />
      <Ref4 />
      <br /><br /><br /><br />
      {/* <Iteraction /> */}
      <br />
      <Iteraction1 />
      <br />
      <LifeCycleApp />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Ref3 ref={(ref) => this.scroll = ref} />
//         {/* Ref3 컴포넌트에 ref를 먼저 지정 */}
//         <button onClick={() => this.scroll.scrollToBottom()}>To Bottom</button>
//         {/* 지정된 ref를 함수에 대입해서 생성된 ref에 스크롤 효과를 적용 */}
//       </div>
//     );
//   }
// }

export default App;
// default가 없는 경우, import 시 {}를 사용해야 함
// default가 있는 경우, import 시 {}를 생략하고 사용가능
