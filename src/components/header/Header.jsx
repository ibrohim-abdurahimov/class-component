import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import './Header.css'
import logo from '../../assets/Logo (8).svg'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='navbar'>
                    <ul className="navbar__collection">
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>About</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Menu</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Reservation</span>
                            </a>
                        </li>
                    </ul>
                    <div className="navbar__logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="navbar__collection">
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Pages</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Shop</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Contact</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span><IoSearch /></span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span><FiShoppingBag /></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header