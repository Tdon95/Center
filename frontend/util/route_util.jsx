import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ path, component: Component, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);
// const msp = (state) => ({ loggedIn: Boolean(state.session.id) });
const msp = (state) => ({ loggedIn: Boolean(state.session.currentUser) });

export const AuthRoute = withRouter(connect(msp, null)(Auth));
