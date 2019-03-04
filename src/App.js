import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Results from './Results.js';
import Footer from './Footer.js';
import axios from 'axios';
import { scroller} from 'react-scroll'

const apiKey = `$2a$10$S62Y1Ef47zvjTRLZdbVEcO33PQQotdJ.vQIFCmACGySFL0trAhm..`;
const apiUrl = `https://www.potterapi.com/v1/spells/`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      allSpells: [],
      userArray: [],
      showResults: false,
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
  handleClick = async (event) => {
    event.preventDefault();

    // Each button has a unique id that is used to filter the spells by type
    let userSelection = event.target.id;
    let subArray = this.state.allSpells.filter(spell => {
      return spell.type === userSelection;
    })

    // userArray is the subset of spells that are appropriate for the location the user selected. Changing showResults to true, will cause the Results section to render.
    await this.setState({
      userArray: subArray,
      showResults: true
    })

    // I then want to return one random spell from that userArray. This step waits until userArray state has been set, then continues to set a random spell and it's corresponding effect. 
    let randomSpell = this.state.userArray[Math.floor(Math.random() * this.state.userArray.length)];
    this.setState({
      randomSpellName: randomSpell.spell,
      randomSpellEffect: randomSpell.effect
    })

    // Once showResults becomes true, and a random spell is generated, then scroll down to the top of the Results section. 
    scroller.scrollTo('results', {
      duration: 1200,
      smooth: true,
    });
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

          {/* Form uses the handleClick function that is sent to it from App.js, then sends information back up */}
          <Form
            handleClick={this.handleClick}
          />

          {/* Results receives both a function and information from the state of App.js and also sends information back up to App.js. It is also only visible once a user has interacted with the form! */}
          {this.state.showResults ? <Results
            showResults={this.state.showResults}
            displaySpellName={this.state.randomSpellName}
            displaySpellEffect={this.state.randomSpellEffect}
            handleNewSpell={this.handleNewSpell}
          /> : null}
          

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;