import './App.css';
import Header from './components/Header';
import FriendsList from './components/friends-list';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className='fL'>
        <FriendsList />
      </div>
    </div>
  );
}

export default App;
