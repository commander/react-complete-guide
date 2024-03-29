import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    
  }

  state = {
    persons: [
      {
        name: 'Ashish', age: 28, id:'1'
      },
      {
        name: 'Avani', age: 24, id:'2'
      },
      {
        name: 'Swara', age: 9, id:'3'
      }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount...');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate...');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate...');
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // console.log('was clicked');
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons  
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler} />
        </div>
      );
    }

    return (
      <WithClass classes={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} />
          {persons}
      </WithClass>
    );
  }
}

export default App;
