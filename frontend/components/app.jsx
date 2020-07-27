import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    {/* <h1>Testing, testing 1,2,3</h1> */}
    <h1>Center</h1>
    {/* <Switch> */}
    {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
    {/* </Switch> */}
  </div>
);

export default App;
