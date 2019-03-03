import React from 'react';
import './Form.css';
import { Link } from "react-scroll";

// My form is also a simple component because it doesn't need state. It does pass information back to App.js through props though! 
const Form = (props) => {
    return (
        <form id="form" action="">
            <div className="wrapper">
                <h2>Where are you?</h2>
                <div className="options">
                    <Link // <Link>s are all for smooth scrolling
                        activeClass="active"
                        to="results"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1200}>
                        <button className="gold" id="Charm" onClick={props.handleClick}>The Great Hall</button>
                    </Link>
                    <Link
                        activeClass="active"
                        to="results"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1200}>
                        <button className="gold" id="Spell" onClick={props.handleClick}>The Burrow</button>
                    </Link>
                    <Link
                        activeClass="active"
                        to="results"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1200}>
                        <button className="gold" id="Curse" onClick={props.handleClick}>Knockturn Alley</button>
                    </Link>
                    <Link
                        activeClass="active"
                        to="results"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1200}>
                        <button className="gold" id="Jinx" onClick={props.handleClick}>Forbidden Forest</button>
                    </Link>
                </div> {/* End of .options div */}
            </div> {/* End of .wrapper div */}
        </form>
    )
}

export default Form;