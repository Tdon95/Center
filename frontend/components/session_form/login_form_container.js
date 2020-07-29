// import { connect } from "react-redux";
// import { login } from "../../actions/session_actions";
// import SessionForm from "./session_form";

// // import { Link } from "react-router-dom";

// const msp = (state) => ({
//   errors: state.errors.session,
//   formType: "login",
//   // userDemo: { email: "Testemail123@testing.com", password: "password123" },
// });

// const mdp = (dispatch) => {
//   return {
//     processForm: (user) => dispatch(login(user)),
//     // loginDemo: (user) => dispatch(login(user)),
//   };
// };

// export default connect(msp, mdp)(SessionForm);
// // const msp = (state) => ({
// //   currentUser: state.session.currentUser
// //     ? state.entities.users[state.session.currentUser.id]
// //     : {},
// // });
// // const mdp = (dispatch) => ({
// //   login: (user) => dispatch(login(user)),
// // });
// -------------------------------------------------------------
import React from "react";
import { connect } from "react-redux";
import Login from "./login_form";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => ({
  errors: state.errors.session,
  formType: "login",
});
// const mdp = (dispatch) => ({
//   login: (user) => dispatch(login(user)),
// }); previous code. trying to do action: ... instead now
const mdp = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
    <button onClick={() => dispatch(openModal("signup"))}>Signup</button>
  ),
});
export default connect(msp, mdp)(Login);
