import React from 'react'
import {Link} from 'react-router-dom'
import "./Menu.css"

export default function Menu() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link className="itemMenu" to="/">Pag 1 - home </Link> </li>
                    <li><Link className="itemMenu" to="/usuarios">Clientes</Link></li>
                    <li><Link className="itemMenu" to="/sobre"> Pag 3 - sobre </Link></li>
                    <li><Link className="itemMenu" to="/pessoas"> Pessoas </Link> </li>
                </ul>
            </nav>
        </header>
    )
}
