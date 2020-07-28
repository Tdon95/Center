import React from "react";
// import { Provider } from "react-redux";
// import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";

const App = () => (
  <div>
    <h1>Center</h1>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
