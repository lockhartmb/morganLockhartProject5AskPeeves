import React from 'react';
import './Results.css';


// My Results section is also a simple component because it doesn't need state. It does receive information from App.js through props though! 
const Results = (props) => {
    return (
        <section className="results" id="results">
            <div className="wrapper">
                <div className="resultsBox">
                    <h2>Why not try:</h2>
                    <p className="randomSpellName">{props.displaySpellName}</p>
                    <p className="randomSpellEffect">{props.displaySpellEffect}</p>
                    <h3>Not quite what you're looking for?</h3>
                    <button className="gold" onClick={props.handleNewSpell}>Get a new spell</button>
                </div>
            </div>
        </section>
    )
}

export default Results;