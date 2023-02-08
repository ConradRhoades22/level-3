import React from 'react'

function Navbar(){
    return(
    <div className='nav'>
        <div>
            <p><a className='brand' href='index.html'>Start Bootstrap</a></p>
        </div>,
        <ul className='navbar'>
            <li className='nav-item'> <a href='index.html'>Home</a></li>
            <li className='nav-item'> <a href='about.html'>About</a></li>
            <li className='nav-item'> <a href='post.html'>Sample Post</a></li>
            <li className='nav-item'> <a href='contact.html'>Contact</a></li>
        </ul>
    </div>
    )
}

export default Navbar;