import logo from './logo.svg';
import './App.css';
import Block from './Block';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Block />
      </header>
    </div>
  );
}

export default App;
