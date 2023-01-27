import React from "react";
import Profilepic from './Me-beach.png'

export default function Nametag() {
    return (
    <div>
        <img src={Profilepic} height="200" width="285" />
        <h1 className="name--tag">Conrad Rhoades</h1>
        <h3> Student Developer </h3>
    </div>
    )
}
