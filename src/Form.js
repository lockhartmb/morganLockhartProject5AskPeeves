import React from 'react';
import './Form.css';


const Form = (props) => {
    return (
        <form action="">
            <div className="wrapper">
                <h2>Where are you?</h2>
                <div className="options">
                    <button id="Charm" onClick={props.handleClick}>The Great Hall</button>
                    <button id="Spell" onClick={props.handleClick}>The Burrow</button>
                    <button id="Jinx" onClick={props.handleClick}>Norturn Alley</button>
                    <button id="Enchantment" onClick={props.handleClick}>Ministry of Magic</button>
                    <button id="Curse" onClick={props.handleClick}>Forbidden Forest</button>
                    <button id="Hex" onClick={props.handleClick}>Malfoy Mansion</button>
                </div>
            </div>
        </form>
    )
}


export default Form;


// IN COMPONENT
// const LikeButton = (props) => {
//     return (
//         <button disabled={props.disabled} onClick={() => { props.handleLike(props.artName) }}>💕</button>
//     )
// }

// // IN APP.JS
// handleChoice = (location) => {
//     this.setState({
//         chosenLocation: location,
//     })
// }


// // IN APP.JS
// <LikeButton
//     disabled={this.state.disableAllButtons}
//     handleLike={this.handleLike}
//     artName={pieceOfArt.title}
// />