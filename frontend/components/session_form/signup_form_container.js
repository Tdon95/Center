// import { connect } from "react-redux";
// import { signup } from "../../actions/user_actions";
// // import { login } from "../../actions/session_actions";
// import SessionForm from "./session_form";

// // import { Link } from "react-router-dom";

// // const msp = ({ errors }) => {
// //   return {
// //     errors: errors.session,
// //     formType: "signup",
// //     navLink: <Link to="/login">Please login instead</Link>,
// //   };
// // };

// const msp = (state) => ({
//   errors: state.errors.session,
//   formType: "signup",
//   // userDemo: { email: "Testemail123@testing.com", password: "password123" },
// });

// const mdp = (dispatch) => {
//   return {
//     processForm: (user) => dispatch(signup(user)),
//     // loginDemo: (user) => dispatch(login(user)),
//   };
// };

// export default connect(msp, mdp)(SessionForm);
// -------------------------------------------------------------
import { connect } from "react-redux";
import Signup from "./signup_form";
import { signup } from "../../actions/session_actions";

const msp = (state) => ({
  errors: state.errors.session,
});
// const mdp = (dispatch) => ({
//   signup: (user) => dispatch(signup(user)),
// }); same as login_form container
const mdp = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
});
export default connect(msp, mdp)(Signup);
