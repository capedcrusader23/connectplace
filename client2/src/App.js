import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/layout/navbar'
import Register from './components/authentication/register'
import Login from './components/authentication/login'
import LandingPage from './components/landingPage/Landing'
import Dashboard from './components/dashboard/dashboard'
import './App.css'
import InterviewExperience from './components/Posts/InterviewExperience'
import GeneralQuery from './components/Posts/GeneralQuery'

import {Provider} from 'react-redux'
import Store from './store'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser} from './actions/authActions'
import PrivateRoute from './components/common/privateRoute'

if(localStorage.jwtToken)
{
  setAuthToken(localStorage.jwtToken);
  let userinfo=jwt_decode(localStorage.jwtToken);
  Store.dispatch(setCurrentUser(userinfo));
  const currentTime=Date.now()/1000;
 
}

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact  path="/register" component={Register}/>
        <Route exact path="/viewpost/:id" component={InterviewExperience}/>
        <Route exact path="/viewpost2/:id" component={GeneralQuery}/>
        <Route exact  path="/dashboard" component={Dashboard}/>
              </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
