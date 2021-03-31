import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';
class App extends Component {
	state = {
		userInput: ''
	}
	deleteCharHandler = (charIndex) => {
		const text = this.state.userInput.split('');
		text.splice(charIndex,1);
		const updatedText = text.join('');
		this.setState({userInput:updatedText})
	}
	inputChangedHandler = (event) => {
		this.setState({userInput: event.target.value})
	}
	
	render() {
		const charList = this.state.userInput.split('').map((ch,index) => {
			return <Char character={ch} key={index} click={() => this.deleteCharHandler(index)}/>
		})
	  return (
	    <div className="App">
	      <input type="text" 
	      onChange={this.inputChangedHandler}
	      value={this.state.userInput}/>
	      <p>{this.state.userInput}</p>
	      <Validation inputLength={this.state.userInput.length} />
	    	{charList}
	    </div>
	  )
	}
}

export default App;
