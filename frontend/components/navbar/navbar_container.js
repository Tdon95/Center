// import { connect } from "react-redux";
// import { logout } from "../../actions/session_actions";
// import Navbar from "./navbar";

// const msp = (state) => ({
//   currentUser: state.session.currentUser
//     ? state.entities.users[state.session.currentUser.id]
//     : {},
// });

// // const msp = ({ session, entities: { users } }) => {
// //   return {
// //     currentUser: users[session.id],
// //   };
// // };

// const mdp = (dispatch) => ({
//   logout: () => dispatch(logout()),
// });
// export default connect(msp, mdp)(Navbar);
// ----------------------------------------------------------------

import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Navbar from "./navbar";
import { openModal } from "../../actions/modal_actions";
// const msp = (state) => ({
//   currentUser: state.session.currentUser
//     ? state.entities.users[state.session.currentUser.id]
//     : {},
// });
const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  // action: () => dispatch(logout()),
});
export default connect(msp, mdp)(Navbar);
