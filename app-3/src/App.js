import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{

constructor(){
  super();
  
  this.state = {
    foods: ['noodle', 'ice', 'rice', 'ham', 'cheese'],
    foodpick: []
  }
}

changeHandler(value){
  this.setState({
    foodpick:value
  })
}


render(){
  // let foodpick = foods.filter
  // });

  let foodsToDisplay = this.state.foods
      .filter((element, index) => {
        return element.includes(this.state.foodpick);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

  return(
    <div className="app">
    <input 
    onChange={e => this.changeHandler(e.target.value)} 
    type = "text"/>
    {foodsToDisplay}
    </div>
  )
}
}