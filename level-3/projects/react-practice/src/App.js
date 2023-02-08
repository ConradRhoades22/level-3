import './App.css';
import Main from './components/Main'
import Navbar from'./components/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Main />
      </header>
    </div>
  );
}

export default App;
