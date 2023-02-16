import './App.css';
import React from "react"
import { useEffect } from "react"
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')

  function cClick() {
    return setCount(prevState => prevState + 1)
  }
  useEffect(() => {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(res => {
        setColor(res.colors[0].hex)
      })
      .catch(err => console.log(err))
  },[count])

  return (
    <div className="App">
      <header className="App-header">
        <div className='colorBox' style={{'backgroundColor': `#${color}`}}>
          <h1 className='header'>Click here for a random color</h1>
          <button
            onClick={cClick}
        >Change Color</button>
      </div>
      </header>
    </div>
  );
}

export default App;
