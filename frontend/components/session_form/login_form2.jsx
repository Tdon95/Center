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
    this.props.action(user).then(() => {
      this.props.history.push("/");
    });
  }
  handleDemoLogin(e) {
    e.preventDefault();
    return this.props.demoLogin({
      email: "demotest@demo.com",
      password: "123456",
    });
  }

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

  render() {
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

    return (
      <div className="modal-background">
        <div className="invisible" onClick={this.handleClose} />
        <div className="modal-child">
          <div
            style={{ backgroundImage: `url(${window.formImg})` }}
            className="modal-session-form"
          >
            <form className="modal-form" onSubmit={this.handleSubmit}>
              <button className="modal-close-button" onClick={this.handleClose}>
                {String.fromCharCode(10005)}
              </button>
              <h1 className="modal-header">{head}</h1>
              <h2 className="modal-subheader">{head2}</h2>
              <label className="modal-label">
                Username
                <br />
                <input
                  className="modal-input"
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
              </label>
              <br />
              <br />
              <label className="modal-label">
                Password
                <br />
                <input
                  className="modal-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <div className="modal-errors">{this.renderErrors()}</div>
              <br />
              <br />
              <div className="submit-buttons">
                <button
                  className="submit-button"
                  type="submit"
                  value={this.props.formType}
                >
                  {buttonName}
                </button>
                <br />
                <br />
                <button className="demo-user" onClick={() => this.demoLogin()}>
                  Demo User
                </button>
              </div>
              <br />
              {otherForm}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
