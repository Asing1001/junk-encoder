import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import EncodeForm from './components/encodeForm'
import DecodeForm from './components/decodeForm'

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="container">
          <nav className="nav nav-pills nav-justified" style={{ padding: '1em' }}>
            <NavLink exact className="nav-item nav-link" to="/">編碼</NavLink>
            <NavLink className="nav-item nav-link" to="/decode">解碼</NavLink>
          </nav>
          <Route exact path="/" component={EncodeForm} />
          <Route path="/decode" component={DecodeForm} />
        </div>
      </Router>
    );
  }
}

export default App;
