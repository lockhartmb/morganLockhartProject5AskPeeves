import React from 'react';
// import './Results.css';
import Results from './Results.js';

const SeeResults = (props) => {
    if (props.showResults === true) {
        return <Results 
            displaySpellName={this.state.randomSpellName}
            displaySpellEffect={this.state.randomSpellEffect}
            handleNewSpell={this.handleNewSpell}
        />;
    };
}

export default SeeResults;