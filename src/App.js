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
      usersLocationChoice: '',
      randomSpellName: '',
      randomSpellEffect: ''
    }
  }

  componentDidMount() {

    axios({
      method: 'get',
      url: apiUrl,
      responseType: 'json',
      params: {
        key: apiKey,
        format: 'json',
      }
    }).then(response => {
      const allSpells = response.data;
      this.setState({
        allSpells: allSpells
      })
    })
  }

  handleClick = async(event) => {
    event.preventDefault();
    let userSelection = event.target.id;
    let subArray = this.state.allSpells.filter(spell => {
      return spell.type === userSelection;
    })
    
    await this.setState({
      userArray: subArray,
    })

    let randomSpell = this.state.userArray[Math.floor(Math.random() * this.state.userArray.length)];
    this.setState({
      randomSpellName: randomSpell.spell,
      randomSpellEffect: `It ${randomSpell.effect}`
    })
  }

  handleNewSpell = (event) => {
    event.preventDefault();
    let newRandomSpell = this.state.userArray[Math.floor(Math.random() * this.state.userArray.length)];
    this.setState({
      randomSpellName: newRandomSpell.spell,
      randomSpellEffect: `It ${newRandomSpell.effect}`
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Form
            handleClick={this.handleClick}
          />
          <Results 
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