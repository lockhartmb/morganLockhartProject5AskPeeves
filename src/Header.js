import React from 'react';
import './Header.css';
import { Link } from "react-scroll";


// My header is a simple component because it doesn't need to hold state. It doesn't give or take any information. 
const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <h1>Ask Peeves</h1>
                <p>Need a spell?</p>
                <Link // For smooth scroll
                    activeClass="active"
                    to="form" 
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1200}>
                    <button>
                        <i className="fas fa-bolt"></i>
                        <span className="visuallyHidden">Scroll to next section</span>
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Header; 