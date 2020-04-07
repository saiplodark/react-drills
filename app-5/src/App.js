import React, {Component}from 'react'
import './App.css'
import Image from './Image'

export default class App extends Component{
  render(){
    return(
      <div>
        <Image url={"https://http.cat/409"}/>
      </div>
    )
  }
}