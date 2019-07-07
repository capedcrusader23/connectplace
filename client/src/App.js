import React,{Component} from 'react';

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
