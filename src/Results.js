import React from 'react';
import './Results.css';
import { Link } from "react-scroll";


// My Results section is also a simple component because it doesn't need state. It does receive information from App.js through props though! 
const Results = (props) => {
    return (
        <section className="results" id="results">
            <div className="wrapper">
                <div className="resultsBox">
                    <h2>Why not try:</h2>
                    <p className="randomSpellName">{props.displaySpellName}</p>
                    <p className="randomSpellEffect">{props.displaySpellEffect}</p>
                    <div className="links">
                        <div className="newSpell">
                            <h3>Not quite what you're looking for?</h3>
                            <button className="gold newSpellButton" onClick={props.handleNewSpell}>Get a new spell</button>
                        </div>
                        <div className="newPlace">
                            <h3>Going somewhere else?</h3>
                            <Link
                                activeClass="active"
                                to="form"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1200}>
                                <button className="gold">Choose a new place</button>
                            </Link>
                        </div>
                    </div> {/* End of .links div */}
                </div> {/* End of .resultsBox div */}
            </div> {/* End of .wrapper div */}
        </section>
    )
}


export default Results;