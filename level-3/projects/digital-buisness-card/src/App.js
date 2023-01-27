import './App.css';
import Intrests from './components/intrests-info';
import Nametag from './components/name-tag';
import Links from './components/links';
import Aboutinfo from './components/about-info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nametag />
      </header>
      <body>
        <div className='body text'>
          <Aboutinfo />
          <Intrests />
        </div>
      </body>
      <footer>
        <Links />
      </footer>
    </div>
  );
}

export default App;
