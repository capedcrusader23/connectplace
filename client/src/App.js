import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import './App.css';
import Nav from './components/reusable/navbar.js'
import Landing from './components/reusable/landing.js'
import Post from './components/reusable/post.js'
import Login from './components/register/login'
import Register from './components/register/register'
import {Provider} from 'react-redux'
import store from './store.js'
class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <Router>
      <div>
        <Nav></Nav>
        <Route path="/" exact component={Landing} ></Route>
        <div className="container">
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
        </div>
        <Landing></Landing>
        <Post title='Preparation Guide' author='Shriyam Verma' tags={['Amazon', 'Uber', 'Ola']}></Post>
        <Post title='Interview Experience' author='Uphaar Dubey' tags={['Google', 'Microsoft', 'Adobe']}></Post>
      </div>
      </Router>
      </Provider>
    )
  }
}

export default App;
