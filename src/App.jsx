import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>this is Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>this About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>this is Dashboard</h2>
    </div>
  );
}

export default App;
