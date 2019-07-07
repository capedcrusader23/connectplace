import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Nav from './components/reusable/navbar.js'
import Landing from './components/reusable/landing.js'
class App extends Component{
  render(){
    return(
      <div>
        <Nav></Nav>
        <Landing></Landing>
      </div>

    )
  }
}

export default App;
