import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <Counter />
      <br />
      <button
        className='InfoBtn'
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info />}
    </div>
  );
}

export default App;
