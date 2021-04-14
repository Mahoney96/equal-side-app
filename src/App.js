import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import SearchBarButton from './components/SearchBarButton';
import EqualHeader from './components/Header';

function App() {
  return (
    <div className="Equal-header">

      <EqualHeader/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://tunebat.com/Info/What-Is-Love-12-Mix-Haddaway/6x0dv3oTqCeK4gaXo5QMam"
          target="_blank"
          rel="noopener noreferrer"
        >
          What is LOVE. Baby don't hurt  me, dont hurt me. No MORE. 
        </a>
      </header>
    </div>
  );
}

export default App;


// Note 
//      • look into how the Search-Bar You added looks to be styled/formatted by View Dimensions -
//      • DO NOT NEED THE 