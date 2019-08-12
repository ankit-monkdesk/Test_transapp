import React, { Component } from 'react';
import { Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';

import './App.css';
/* Components */
import Login from './componets/Login/Login';
import Registration from './componets/Registration/Registration';
import Dashboard from './componets/Dashboard/Dashboard';
import {PrivateRoute} from './componets/PrivateRoute';


const Secreate = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      sessionStorage === null
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
  )} />
)
class App extends Component {
  
  render() {
    return (
      <div className="app">
       
         <Switch>
         
              <Route exact path="/" component={Login}/>         
              <PrivateRoute  exact path="/dashboard" component={Dashboard} />
              <Route path="/register" component={Registration} /> 
              
          </Switch>

       
      </div>
    );
  }
 
}
export default
() => (
  <div >
      <Router basename="/"> 
  
          <Route component={App} />
     </Router>
 </div>
);