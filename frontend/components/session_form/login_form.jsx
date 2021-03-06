import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleClose(e) {
    e.preventDefault();
    this.props.closeModal();
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.login(user);
    this.props.action(user).then(() => {
      this.props.history.push("/");
    });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const user = Object.assign({}, this.state);
  //   this.props.action(user);
  // }

  handleDemoLogin(e) {
    e.preventDefault();
    return this.props.demoLogin({
      email: "demotest@demo.com",
      password: "123456",
    });
  }
  // buttonStatus() {
  //   if (this.props.handleClose) {
  //     return (
  //       <button className="modal-close" onClick={this.handleCloseModal}>
  //         x
  //       </button>
  //     );
  //   }
  // }
  loginForm() {
    const { email, password } = this.state;
    return (
      <div>
        <h3>Sign in with email</h3>
        {/* <form> */}
        <form onSubmit={this.handleSubmit} className="modal-form">
          {/* <button
            className="modal-close-button"
            onClick={this.handleClose}
          ></button> */}
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={this.handleInput("email")}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.handleInput("password")}
              value={password}
            />
          </label>
          <button onClick={this.handleSubmit}>Sign in</button>
          {/* <button type="submit">Continue</button> */}
        </form>
        <button onClick={this.handleDemoLogin}>Demo Login</button>
      </div>
    );
  }
  errors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  modalForm() {
    const head = "Welcome back.";
    const head2 =
      "Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.";
    const btn = "Sign in with email";
    // const otherForm = <button className="other-form" onClick={() => dispatch(openModal("signup"))}>"No account? Create one"</button>
    const otherForm = (
      <button
        className="other-form"
        onClick={() => this.props.openModal("signup")}
      >
        "No account? Create one"
      </button>
    );
  }

  render() {
    return (
      <div className="modal-background">
        <div className="unview" onClick={this.handleClose}>
          x
        </div>
        <div className="modal-child">
          <div>
            {this.loginForm()}
            {this.errors()}
          </div>
        </div>
      </div>
    );
    // return (
    //   <div className="modal-background">
    //     <div className="unview" onClick={this.handleClose} />
    //     <div className="modal-child">
    //       <div>
    //         {this.loginForm()}
    //         {this.errors()}
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default Login;
