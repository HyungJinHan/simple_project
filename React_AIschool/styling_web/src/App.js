import logo from './sigongjoa.png';
import './App.css';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';
import StyledComponent from './StyledComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
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
      <SassComponent />
      <br />
      <CSSModule />
      <br /><br />
      <StyledComponent />
      <br />
    </div>
  );
}

export default App;
