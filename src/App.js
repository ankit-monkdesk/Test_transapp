import React, { Component } from 'react';
import { Route,HashRouter as Router,Switch} from 'react-router-dom';
import './App.css';
/* Components */
import Login from './componets/Login/Login';
import Registration from './componets/Registration/Registration';
import  Dashboard from './componets/Dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router basename='/'>
         <Switch>
              <Route  exact path="/" component={Login}/>
              <Route  path="/dashboard" component={Dashboard} />
              <Route   path="/register" component={Registration} /> 
          </Switch>
      
        </Router>
       
      </div>
    );
  }
 
}
export default App;
// () => (
//   <div>
//      <Router>
//           <Route component={App} />
//      </Router>
//  </div>
// );