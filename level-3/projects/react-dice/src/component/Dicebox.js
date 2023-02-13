import React from "react"
import { useState } from "react"

export default function Dicebox() {
    const [numbers, setNumbers] = useState([1, 2, 5, 6, 3])

    const numFunc = () => {
        
        let newNum = []
        for (let index = 0; index < 5; index++) {
            let genNum = Math.floor(Math.random() * 6)
            newNum.push(genNum)
        }
        setNumbers(newNum)
        console.log(numbers)

    }
    return (
        <div>
            <h1>Here are you Numbers:
                {numbers}
            </h1>
            <div>
                <button onClick= {numFunc}>Get some randon numbers</button>
            </div>
        </div>
    )
}