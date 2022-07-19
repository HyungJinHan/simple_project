// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import { useState } from 'react';
import CounterReducer from './CounterReducer';
import InfoReducer from './InfoReducer';
import img1 from './app.ico'
import FormInputReducer from './formInputReducer';
import FormInputReducer1 from './formInputReducer1';
import Average from './Average';
import InfoUseInput from './InfoUseInput';

function App() {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={img1} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <hr />
      <br /><br /><br /><br /><br />
      <Counter />
      <br />
      <CounterReducer />
      <br />
      <FormInputReducer />
      <br />
      <FormInputReducer1 />
      <br />
      <Average />
      <br />

      <button className='InfoBtn' onClick={() => { setVisible1(!visible1); }}>
        {visible1 ? 'InfoReducer 숨기기' : 'InfoReducer 보이기'}
      </button>
      <br />

      {visible1 && <InfoReducer />}
      <button className='InfoBtn' onClick={() => { setVisible(!visible); }}>
        {visible ? 'Info 숨기기' : 'Info 보이기'}
      </button>
      <br />
      {visible && <Info />}

      <button className='InfoBtn' onClick={() => { setVisible2(!visible2); }}>
        {visible2 ? 'InfoUseInput 숨기기' : 'InfoUseInput 보이기'}
      </button>
      <br />
      {visible2 && <InfoUseInput />}
    </div>
  );
}

export default App;
