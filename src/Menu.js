import React from 'react'
import {Link} from 'react-router-dom'
import "./Menu.css"

export default function Menu() {
    return (
        <header>
            <nav id="menu-h">
                <ul>
                    <li><Link className="itemMenu" to="/">HOME</Link> </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href="https://www.instagram.com/lotsaerodesign/">Instagram</a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href="https://international.unifei.edu.br/extension/competition-projects/lots-aerodesign/">Saiba Mais</a>
                    </li>
                    <li><Link className="itemMenu" to="/pessoas"> Pessoas </Link> </li>
                </ul>
            </nav>
        </header>
    )
}
