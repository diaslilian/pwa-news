import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./containers/Home.js";
// import Post from "./containers/Post.js";

function App() {
  return (
    <main>
      <section>
        <Router>
          <div>
            <Switch>
              <Route path="/:subject/:id">
                <Home />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </section>
    </main>
  );
}

export default App;
