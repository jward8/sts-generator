import logo from './logo.svg';
import sts_icon from './assets/sts_icon.ico';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sts_icon} className="App-logo" alt="logo" />
        <p className='loadingText'>
          Loading Slay the Spire Generator
        </p>
      </header>
    </div>
  );
}

export default App;
