import React from "react";
import { connect } from "react-redux";
import LogInFormContainer from "../session_form/login_form_container";
import SignUpFormContainer from "../session_form/signup_form_container";
import { closeModal } from "../../actions/modal_actions";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LogInFormContainer />;
      break;
    case "signup":
      component = <SignUpFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const msp = (state) => ({
  modal: state.ui.modal,
});

const mdp = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(Modal);
