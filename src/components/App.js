import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../pages/login";
import Main from "../pages/main";

export default () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
    </Fragment>
  </Router>
);
