import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  
  constructor(){
    super();

    this.state={
      text: ""
    }
  }

  changeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  render(){
    return(
      <div className="App">
        <input 
          name = "text"
          onChange={e => this.changeHandler(e)} 
          type = "text"/>
          {/* value = {this.state.text}/> */}
          <p>{this.state.text}</p>
    
          </div>
    )
  }
}


