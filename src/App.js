import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  // State is a way to create dynamic components in the App
  state = {
    persons: [
      { id: 'ijp', name: 'Ian', age: 22 },
      { id: 'spp', name: 'Sofia', age: 20 },
      { id: 'pgp', name: 'Patrick', age: 17 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    // Done completely without mutating the actual state. Everything is a copy
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = index => {
    // Slice method used to create safe copy of data in array
    // so the actual state is not being spliced.
    // const persons = this.state.persons.slice();

    // ES6 spread operator creates a copy like the slice method below
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const styles = {
      backgroundColor: '#1976d2',
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
      outline: '0'
    };

    let persons = null;

    if (this.state.showPersons) {
      styles.backgroundColor = '#d32f2f';
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* Don't call handler with () because that calls it immediately upon loading and not on the acutal click */}
        {/* Below syntax with parameter is ok but bind syntax is better for rendering purposes.
            bind function is more efficient than arrow function syntax. */}
        <button style={styles} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );

    // Above code in jsx gets compiled to this in React
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'), 'Hi, I\'m a react app!!!');
  }
}

export default App;
