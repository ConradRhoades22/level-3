import './App.css';
import React from "react"
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState()

  const [nList, setNList] = useState([])

  function eChange(event){
    setName(event.target.value)
  }
  
  function formSubmit(event) {
    event.preventDefault()
    console.log(event.target[0].value)
    setNList(prev => [...prev, event.target[0].value] )
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={formSubmit}>
          <input type="text" placeholder="name" onChange={eChange}></input>
          <button>Submit</button>
          <h1 className='nameList'>{name}</h1>
          {/* map name to display each */}
          <ul>
            {nList.map(item => <li key={nList[item]}>{item}</li>)}
          </ul>
        </form>
      </header>
    </div>
  );
}


