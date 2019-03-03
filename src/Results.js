import React from 'react';
import './Results.css';

const Results = (props) => {
    return (
        <div className="results" id="results">
            <div className="wrapper">
                <div className="resultsBox">
                    <h2>Why not try:</h2>
                    <p className="randomSpellName">{props.displaySpellName}</p>
                    <p className="randomSpellEffect">{props.displaySpellEffect}</p>
                    <h3>Not quite what you're looking for?</h3>
                    <button onClick={props.handleNewSpell}>Get a new spell</button>
                </div>
            </div>
        </div>
    )
}

export default Results;