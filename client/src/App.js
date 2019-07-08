import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/reusable/navbar.js'
import Landing from './components/reusable/landing.js'
import Post from './components/reusable/post.js'
import Login from './components/register/login'
import Register from './components/register/register'
import {Provider} from 'react-redux'
import store from './store.js'
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthtoken'
import {setCurrentUser, logoutuser} from './action/auth'
import PrivateRoutes from './components/common/privateroute'
import Dashboad from './components/dashboard/dashboard'

if(localStorage.jwtToken)
{
  console.log("here")
  setAuthToken(localStorage.jwtToken);
  const decoded=jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))
  //check for expired token
  const currenttime=Date.now()/1000;
  if(decoded.exp<currenttime)
  {
    store.dispatch(logoutuser());
    //clear current profile
    //
    window.location.href='/login';
  }

}

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
          <PrivateRoutes exact path="/dashboard" component={Dashboad}></PrivateRoutes>
        </div>
        <Landing></Landing>
       
      </div>
      </Router>
      </Provider>
    )
  }
}

export default App;
