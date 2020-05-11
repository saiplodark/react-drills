import React, { Component } from "react";
import "./App.css";

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: ""
    };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon/1/").then(response => {
      this.setState({
        pokemon: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.pokemon.name}</h1>
        <h1>Base experience: {this.state.pokemon.base_experience}</h1>
        <h1>Height: {this.state.pokemon.height}</h1>
        <h1>Order: {this.state.pokemon.order}</h1>
        <h1>Weight: {this.state.pokemon.weight}</h1>
      </div>
    );
  }
}

export default App;