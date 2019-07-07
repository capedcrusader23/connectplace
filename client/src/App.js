import React,{Component} from 'react';

import './App.css';
import Nav from './components/reusable/navbar.js'
import Landing from './components/reusable/landing.js'
import Post from './components/reusable/post.js'
class App extends Component{
  render(){
    return(
      <div>
        <Nav></Nav>
        <Landing></Landing>
        <Post title='Preparation Guide' author='Shriyam Verma' tags={['Amazon', 'Uber', 'Ola']}></Post>
        <Post title='Interview Experience' author='Uphaar Dubey' tags={['Google', 'Microsoft', 'Adobe']}></Post>
      </div>

    )
  }
}

export default App;
