import React from "react";

export default function Links() {
    return (
    <div>
        <a href="https://www.linkedin.com/in/conrad-rhoades-259959160/">
            <button className="Linkedin">Linkedin</button>
        </a>
        <a>
            <button onClick={() => navigator.clipboard.writeText('conradrhoades@gmail.com')} className="Email">
            Email
            </button>
        </a>
    </div>
)
}
