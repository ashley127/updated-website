import React from 'react'
import "../styles/NavBar.css"

export default function NavBar(){
    return(
        <nav className = "nav">
            <a href = "/" className='main'>ashley zhao.</a>
            <ul>
                <li>
                    <a href = "/#work"> Work </a>
                </li>
                <li>
                    <a href = "/#projects"> Projects </a>
                </li>
                <li>
                    <a href = "/#contact"> Contact </a>
                </li>
            </ul>
        </nav>
    )
}
//add dark mode toggle 