import './App.css';
import Logo from './components/Logo';
import OriginDestination from './components/OriginDestination'
import FlightChooserPage from './pages/FlightChooserPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Logo/>
      <OriginDestination/>
      <FlightChooserPage/>
    </div>
  );
}

export default App;
