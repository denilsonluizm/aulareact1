import React from 'react'
import {Link} from 'react-router-dom'
import "./Menu.css"

export default function Menu() {
    return (
        <header>
            <nav id="menu-h">
                <ul>
                    <li><Link className="itemMenu" to="/">Home</Link> </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href="https://www.instagram.com/lotsaerodesign/">Instagram</a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href="https://international.unifei.edu.br/extension/competition-projects/lots-aerodesign/">Saiba Mais</a>
                    </li>
                    <li><Link className="itemMenu" to="/membros"> Membros </Link> </li>
                    <li><Link className="itemMenu" to="/calculadora"> Calculadora </Link> </li>
                </ul>
            </nav>
        </header>
    )
}
