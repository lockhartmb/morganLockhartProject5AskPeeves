import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Results from './Results.js';
import Footer from './Footer.js';
import axios from 'axios';

const apiKey = `$2a$10$S62Y1Ef47zvjTRLZdbVEcO33PQQotdJ.vQIFCmACGySFL0trAhm..`;
const apiUrl = `https://www.potterapi.com/v1/spells/`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      allSpells: [],
      userArray: [],
      randomSpellName: '',
      randomSpellEffect: ''
    }
  }

  componentDidMount() {

    // Axios call is made and returns list of all spells data
    axios({
      method: 'get',
      url: apiUrl,
      responseType: 'json',
      params: {
        key: apiKey,
        format: 'json',
      }
    }).then(response => {

      // To simplify response, saved array of spells to it's own variable
      const allSpells = response.data;

      // Saved array of all spells to state
      this.setState({
        allSpells: allSpells
      })
    })
  }

  // Function for when a user clicks on a location button. I used async because I want to filter the spells, set state with that pared down list, then get a random spell from that state, and set that in a new state.
  handleClick = async(event) => {
    event.preventDefault();

    // Each button has a unique id that is used to filter the spells by type
    let userSelection = event.target.id;
    let subArray = this.state.allSpells.filter(spell => {
      return spell.type === userSelection;
    })
    // userArray is the subset of spells that are appropriate for the location the user selected.
    await this.setState({
      userArray: subArray
    })

    // I then want to return one random spell from that userArray. This step waits until userArray state has been set, then continues to set a random spell and it's corresponding effect. 
    let randomSpell = this.state.userArray[Math.floor(Math.random() * this.state.userArray.length)];
    this.setState({
      randomSpellName: randomSpell.spell,
      randomSpellEffect: randomSpell.effect
    })
  }

  // Function for if a user wants to get a new spell in the same category, it does not re-filter, it just finds a new random spell, so it only updates state of randomSpellName and randomSpellEffect.
  handleNewSpell = (event) => {
    event.preventDefault();
    let newRandomSpell = this.state.userArray[Math.floor(Math.random() * this.state.userArray.length)];
    this.setState({
      randomSpellName: newRandomSpell.spell,
      randomSpellEffect: newRandomSpell.effect
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Form
          // Form uses the handleClick function that is sent to it from App.js, then sends information back up
          handleClick={this.handleClick}
          />
          <Results 
          // Results receives both a function and information from the state of App.js and also sends information back up to App.js
            displaySpellName={this.state.randomSpellName}
            displaySpellEffect={this.state.randomSpellEffect}
            handleNewSpell={this.handleNewSpell}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;