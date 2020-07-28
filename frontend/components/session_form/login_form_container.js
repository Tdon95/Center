import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";

import SessionForm from "./session_form";
import { Link } from "react-router-dom";

// const msp = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: "login",
//     navLink: <Link to="/signup">Please sign up instead</Link>,
//   };
// };

const msp = (state) => ({
  errors: state.errors.session,
  formType: "login",
  userDemo: { email: "Testemail123@testing.com", password: "password123" },
});

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    loginDemo: (user) => dispatch(login(user)),
  };
};

export default connect(msp, mdp)(SessionForm);
