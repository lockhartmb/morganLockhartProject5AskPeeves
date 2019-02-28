import React from 'react';
import './Results.css';

const Results = (props) => {
    return(
        <div className="results">
            <h2>Why not try:</h2>
            <div>
                <p>{props.usersLocationChoice}</p>

            </div>
            <p>Not what you're looking for?</p>
            <button>Get a new spell</button>
        </div>
    )
}

export default Results;