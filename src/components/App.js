import React, { Component } from 'react';
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
