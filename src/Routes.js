import React, {Component} from "react";

import {BrowserRouter as Router, Route} from "react-router-dom";

import Main from "./Pages/Main/Main";
import Nav from "./Pages/Main/Components/Nav/Nav";
import Footer from "./Pages/Main/Components/Footer/Footer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/SAIB" component={Main} />
        <Route exact path="/Nav" component={Nav} />
        <Route exact path="/Footer" component={Footer} />
      </Router>
    );
  }
}

export default Routes;
