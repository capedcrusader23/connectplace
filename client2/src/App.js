import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/layout/navbar'
import Register from './components/authentication/register'
import Footer from './components/layout/footer'
import Login from './components/authentication/login'
import './App.css'
import {Provider} from 'react-redux'
import Store from './store'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './actions/authActions'


if(localStorage.jwtToken)
{
  setAuthToken(localStorage.jwtToken);
  let userinfo=jwt_decode(localStorage.jwtToken);
  Store.dispatch(setCurrentUser(userinfo));
}
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <Router>
      <div className="App">
        <Navbar></Navbar>
        <Route exact path="/login" component={Login}></Route>
        <Route exact  path="/register" component={Register}></Route>
        <Footer></Footer>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
