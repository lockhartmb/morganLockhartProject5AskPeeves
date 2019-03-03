import React from 'react';
import './Footer.css';

// My footer is a simple component because it doesn't need to hold state. It doesn't give or take any information.
const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <p>Brought to you by <a href="http://www.morganlockhart.com">Morgan Lockhart</a>, HackerYou 2019, using the <a href="https://www.potterapi.com/">Harry Potter API</a>. Thanks <a href="https://twitter.com/_kristenspencer">Kristen</a>!</p>
            </div>
        </footer>
    )
}

export default Footer;