import {useState} from 'react'

export default function Name() {
    const [color, setColor] = useState("pink")
    // const [colors, setColors] = useState("pink", "blue")
    // setColors(prevColors => [...prevColors, "green"])
    // console.log(colors)
    return(
        <div>
            <button onClick={() => {if (color ==="blue") {
                setColor("pink")
            } else {
                setColor("blue")
            }}}>color button</button>
            <h2>{color}</h2>
        </div>
    )
}
