import React from 'react';
import './Form.css';
import { Link } from "react-scroll";

const Form = (props) => {
    return (
        <form id="form" action="">
            <div className="wrapper">
                <h2>Where are you?</h2>
                <div className="options">
                    <Link
                        activeClass="active"
                        to="results"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1800}>
                        <button id="Charm" onClick={props.handleClick}>The Great Hall</button>
                    </Link>
                    <Link
                        activeClass="active"
                        to="results"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1800}>
                        <button id="Spell" onClick={props.handleClick}>The Burrow</button>
                    </Link>
                    <Link
                        activeClass="active"
                        to="results"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1800}>
                        <button id="Curse" onClick={props.handleClick}>Knockturn Alley</button>
                    </Link>
                    <Link
                        activeClass="active"
                        to="results"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1800}>
                        <button id="Jinx" onClick={props.handleClick}>Forbidden Forest</button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default Form;