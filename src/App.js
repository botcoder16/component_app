import React, { Component } from 'react'
import Home from './components/Home'
import NavBar from  './components/NavBar'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
      <div className="App">
        <Home/>
      </div>
      </div>
    )
  }
}

export default App