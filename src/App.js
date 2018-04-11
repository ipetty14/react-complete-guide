import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
     return (
      <div className="App">
       <h1>Hi, I am a react app</h1>
       <Person />
      </div>
     );

    // Above code in jsx gets compiled to this in React
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'), 'Hi, I\'m a react app!!!');
  }
}

export default App;
