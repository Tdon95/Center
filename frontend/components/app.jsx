import React from "react";
// import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import Navbar from "./navbar/narbar_container";

const App = () => (
  <div>
    <header>
      <h1>Center</h1>
      {/* <Navbar /> */}
    </header>
    <Switch>
      <Route path="/">
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Navbar />
      </Route>
    </Switch>
  </div>
);

export default App;
