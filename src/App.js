import React, { Component } from 'react';
import { Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';

import './App.css';
/* Components */
import Login from './componets/Login/Login';
import Registration from './componets/Registration/Registration';
import Dashboard from './componets/Dashboard/Dashboard';



const LoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    sessionStorage.getItem('formData')
          ?<Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
          : <Component {...props} />
  )} /> 
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      sessionStorage.getItem('formData')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  )} />
)
class App extends Component {
  
  render() {
    return (
      <div className="app">
       
         <Switch>
         
              <LoginRoute exact path="/" component={Login}/>         
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