import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
          <Button/>
        </a>
      </header>
    </div>
  );
}

export default App;


// Note 
//      • look into how the Search-Bar You added looks to be styled/formatted by View Dimensions -
//      • MEANING- That 