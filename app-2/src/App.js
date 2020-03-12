import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  
  constructor(){
    super();
    
    this.state = {
      foods: ['noodle', 'ice', 'rice', 'ham', 'cheese']
    }
  }
  
  render() {
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{foodsToDisplay}</div>;
  }
  }
  // changeHandler(e){
    //   this.setState({
      //     [this.target.name]:this.target.value
  //   })
  // }

  // render(){
  //   return(
  //     <div className="App">
  //       <input
  //       name = "food"
  //       onChange = {e => this.changeHandler(e)}
  //       type = "text"
  //       />
  //     </div>

  //   )
  // }





