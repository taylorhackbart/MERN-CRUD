import React from "react";
import NavBar from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";

//PUBLIC ROUTES
import About from "./pages/About"
import HomePage from "./pages/Home/Home.js";
import NoMatch from "./pages/NoMatch";

function App() {

  return (
    <div className="page-container">
      <BrowserRouter>
        <NavBar />
          <div className="app-background">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={About} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
