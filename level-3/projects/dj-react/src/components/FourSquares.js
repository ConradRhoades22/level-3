import React from "react";
import Square from "./Square";
import { useState } from "react";

export default function Foursquare() {

    const [colors, setColors] = useState(["white", "white", "white", "white"])

    const button1 = () => {
        if (colors[0] === 'white' && colors[1] === 'white' && colors[2] === 'white' && colors[3] === 'white') { 
            setColors(["black", "black", "black", "black"])
        } else {
            setColors(["white", "white", "white", "white"])
        }
    }

    const button2 = () => {
        if (colors[0] !== 'purple' && colors[1] !== 'purple') {
            setColors(prev =>["purple", "purple", prev[2], prev[3]])
        }
    }
    const button3 = () => {
        setColors(prev =>[prev[0], prev[1], "blue", prev[3]])
    }
    const button4 = () => {
        setColors(prev =>[prev[0], prev[1], prev[2], "blue"])
    }
    const button5 = () => {
        setColors(prev =>["brown", "brown", "brown", "brown"])
    }
    const button6 = () => {
        setColors(prev =>["navy", "silver", "navy", "silver"])
    }
    const button7 = () => {
        setColors(prev =>["gold", prev[1], "red", prev[3]])
    }
    const button8 = () => {
        setColors(prev =>['pink', prev[1], prev[2], "purple"])
    }
    

    return (
        <div>
            <div className="fourSquare">
                <Square color={colors[0]} />
                <Square color={colors[1]} />
                <Square color={colors[2]} />
                <Square color={colors[3]} />
            </div>
            <div className="buttons">
                <button className="button1" onClick={() => button1()}>Button 1</button>
                <button className="button2" onClick={() => button2()}>Button 2</button>
                <button className="button3" onClick={() => button3()}>Button 3</button>
                <button className="button4" onClick={() => button4()}>Button 4</button>
                <button className="button5" onClick={() => button5()}>Button 5</button>
                <button className="button6" onClick={() => button6()}>Button 6</button>
                <button className="button7" onClick={() => button7()}>Button 7</button>
                <button className="button8" onClick={() => button8()}>Button 8</button>
            </div>
        </div>
    )
}