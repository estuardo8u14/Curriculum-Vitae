import React, { StrictMode } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./pages/Main/Main";

import "./App.css";

function App() {
  return (
    <StrictMode>
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </StrictMode>
  );
}

export default App;
