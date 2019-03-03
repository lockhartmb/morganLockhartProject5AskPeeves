import React from 'react';
import './Header.css';
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <h1>Ask Peeves</h1>
                <p>Need a spell?</p>
                <Link activeClass="active" to="form" spy={true} smooth={true} offset={0} duration={1800}>
                    <i className="fas fa-bolt"></i>
                </Link>
            </div>
        </header>
    )
}

export default Header; 