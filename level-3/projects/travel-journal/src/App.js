import Header from './components/header';
import Card from './components/card'
import data from './data'
import './App.css';

export default function App() {
  const cards = data.map(item =>{
  return (
    <Card 
    key={item.id}
    item={item}
    />
  );
})
return (
  <div>
    <header><Header /></header>
    <section className='location-list'>
      {cards}
    </section>
  </div>
)
}
