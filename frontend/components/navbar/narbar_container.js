import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Navbar from "./navbar";

const msp = (state) => ({
  currentUser: state.session.currentUser
    ? state.entities.users[state.session.currentUser.id]
    : {},
});
const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
});
export default connect(msp, mdp)(Navbar);