import './App.css';
import Inputs from './components/Inputs';
import React from "react"
import Badge from './components/Badge';


export default function App() {

  const [formInput, setformInput] = React.useState(
    {firstName: "", lastName: "", email:"", birthPlace: "", phoneNumber: "", favFoods: "", comments: ""}
)

  const [badgeList, setBadgeList] = React.useState([])

  function formSubmit(event){
    event.preventDefault()
    setBadgeList(prev => [...prev, formInput])
    setformInput({firstName: "", lastName: "", email:"", birthPlace: "", phoneNumber: "", favFoods: "", comments: ""})
}
  return (
    <div className="App">
      <header className="header">
        <h1>Name Badge List</h1>
      </header>
      <div className='content'>
        <div className='inputForm'>
        <Inputs formSubmit={formSubmit} formInput={formInput} setformInput={setformInput}/>
        </div>
        <div className='badgeContainer'>
          {badgeList.map(item => <Badge {...item}/>)}
        </div>
      </div>
    </div>
  );
}

