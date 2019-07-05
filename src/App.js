import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [{
      name: 'Jay Nirgudkar',
      age: '22'
    },{
      name: 'Ayesha',
      age: '20'
    }, {
      name:'Sarah',
      age: '21'
    }],
    showPerson: true
  }

  SwitchNameHandler = (newName) => {
    console.log('State handler was clicked');
    //this.state.persons[0].name = "Jay Nirgudkar" //THIS WILL GIVE A WARNING! DONT DO THIS
      this.setState({
        persons: [{
          name: 'Jay Nirgudkar',
          age: '22'
        },{
          name: 'Ayesha',
          age: '20'
        }, {
          name:'Sarah',
          age: '21'
        }],
        showPerson: !this.state.showPerson
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [{
        name: event.target.value,
        age: '22'
      },{
        name: event.target.value,
        age: '20'
      }, {
        name:'Sarah',
        age: '21'
      }]
    })
  }

  render () {
    return(
      <div className="App">
        <h1>Hi! I am a react app</h1>
        <button onClick={() => this.SwitchNameHandler('Dayummmm!!!!!')} >Switch Name</button>
        {this.state.showPerson ? <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.SwitchNameHandler.bind(this, 'Nibbaaaaaa!!!')}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> : null}
        {/*<UserInput/>
        <UserOutput userName = {this.state.userName[0]}/>
        <UserOutput userName = 'IronMan!!'/>
        <UserOutput userName = 'Thor!!'/>*/}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('H1',null,  'Hi!, I\'m a react app!'));
  };
}

export default App;


        //FOLLOWING CODE WORKS SAME AS STATE BUT WHEN USED IN FUNCTIONAL COMPONENTS
  /*const App =(props) =>{
  const [personState, setPersonState] = useState({
    persons: [{
      name: 'Jay',
      age: '28'
    },{
      name: 'Ayesha',
      age: '21'
    }, {
      name:'Sarah',
      age: '28'
    }]
  });


const SwitchNameHandler = () => {
  console.log('State handler was clicked');
  //this.state.persons[0].name = "Jay Nirgudkar" //THIS WILL GIVE A WARNING! DONT DO THIS
  setPersonState({
    persons: [{
      name: 'Jay Nirgudkar',
      age: '22'
    },{
      name: 'Ayesha',
      age: '20'
    }, {
      name:'Sarah',
      age: '21'
    }]
  })
}*/
