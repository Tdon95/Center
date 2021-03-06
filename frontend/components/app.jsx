import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import Navbar from "./navbar/navbar_container";
import Modal from "./modal/modal";
import { Link } from "react-router-dom";
// import "./app.css";

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/">
        <h1>Center</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route path="/">
        <Navbar />
      </Route>
    </Switch>
  </div>
);

export default App;
