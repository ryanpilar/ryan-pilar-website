import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homefrelencer } from "./Home-frelencer";
import { NotFound } from "./404";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>

            <Route exact path="/" component={Homefrelencer} />
            <Route component={NotFound} />

          </Switch>
        </Router>
      </React.Fragment>
    );

  }
}

export default App;




