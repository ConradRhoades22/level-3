import Card from './components/Card';
import data from './data'
import Header from './components/Header';
import './App.css';


export default function App(){
  const cards = data.map(item => {
    return (
      <Card
        {...item}
        key={item.id}
        item={item}
      />
    )
  })
return (
  <div className="App">
    <header className="Header">
      <Header />
    </header>
    {cards}
  </div>
);

};