import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  // State is a way to create dynamic components in the App
  state = {
    persons: [
      { name: 'Ian', age: 22 },
      { name: 'Sofia', age: 20 },
      { name: 'Patrick', age: 17 }
    ]
  }

  // ES6 Syntax needed to use 'this' keyword
  switchNameHandler = ( newName ) => {
    // console.log('Was clicked!');
    // DON'T DO THIS => this.state.persons[2].name='Meghan';
    this.setState({
      persons: [
        { name: 'Ian', age: 22 },
        { name: 'Sofia', age: 20 },
        { name: newName, age: 17 }
      ]
    })
  }

  nameChangedHandler = ( event ) => {
    this.setState({
      persons: [
        { name: 'Ian', age: 22 },
        { name: event.target.value, age: 20 },
        { name: 'Patrick', age: 17 }
      ]
    })
  }

  render() {
    const styles = {
      buttonClass: {
        backgroundColor: '#79bbff',
        borderRadius: '6px',
        border: '1px solid #84bbf3',
        display: 'inline - block',
        cursor: 'pointer',
        color: '#ffffff',
        fontFamily: 'Arial',
        fontSize: '15px',
        fontWeight: 'bold',
        padding: '6px 24px',
        textDecoration: 'none',
        textShadow: '0px 1px 0px #528ecc',

        ':hover': {
          backgroundColor: '#378de5',
        },

        ':active': {
          position: 'relative',
          top: '1px',
        },
      },
    };

     return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        {/* Don't call handler with () because that calls it immediately upon loading and not on the acutal click */}
        {/* Below syntax with parameter is ok but bind syntax is better for rendering purposes.
            bind function is more efficient than arrow function syntax. */}
         <button
          style={styles.buttonClass}
          onClick={() => this.switchNameHandler('Patty')}>Switch Name</button>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}> My Hobbies: Makeup, Video Production</Person>
        {/* 'click' becomes part of props and allows for a change in
            the state from outside functions that are not directly part
            of the App container here. This helps reduce the number of
            components in the program while still giving flexibility.  */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My Hobbies: Basketball, Coding</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Pat')}>My Hobbies: JROTC, Shooting</Person>
      </div>
     );

    // Above code in jsx gets compiled to this in React
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'), 'Hi, I\'m a react app!!!');
  }
}

export default Radium(App);