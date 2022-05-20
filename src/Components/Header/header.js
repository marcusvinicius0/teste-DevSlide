
import logo from '../../assets/logo.svg';
import magnifier from '../../assets/magnifier.svg';
import menu from '../../assets/menu.png';

import { useState } from 'react';

import { FiX } from 'react-icons/fi';

import './header.css';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header>

            <img className="logo" src={logo} alt="logo" />
            <nav className="navegation-area">
                <ul className={showMenu ? 'menuOn' : 'menuOff'}>
                    <li><a href="/"><strong>Home</strong></a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Gallery</a></li>
                    <li><a href="/">Team</a></li>
                    <img src={magnifier} width={15} alt="search-icon" />
                </ul>
            </nav>
            <div className="menu-hamb" onClick={() => setShowMenu(!showMenu)} >
                {showMenu ? <FiX size={35} color="#000" /> :
                    <img src={menu} width={40} alt="menuhamb" />
                }
            </div>

            <hr className="first-line" />
        </header>
    )
}