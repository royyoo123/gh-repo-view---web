import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import React, { Component } from 'react';
class App extends Component {
	state = {
		username: 'supermax'
	}

	usernameChangedHandler = (event) => {
		this.setState({username: event.target.value})
	}

	render() {
		return (
    <div className="App">
      <UserInput 
      changed={this.usernameChangedHandler}
      currentName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName="Billy"/>
    </div>
  	);
	}
}

export default App;
