import React, {Component} from "react";

import {BrowserRouter as Router, Route} from "react-router-dom";

import Main from "./Pages/Main/Main";
import Nav from "./Pages/Main/Components/Nav/Nav";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/Nav" component={Nav} />
      </Router>
    );
  }
}

export default Routes;
