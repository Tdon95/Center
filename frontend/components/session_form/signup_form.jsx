import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
  signupForm() {
    const { email, password } = this.state;
    return (
      <div>
        {/* <form className="modal-form"> */}
        <form onSubmit={this.handleSubmit} className="modal-form">
          <h3>Sign Up</h3>
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
          <button onClick={this.handleSubmit}>Sign up</button>
        </form>
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
    return (
      <div className="modal-background">
        <div className="unview" onClick={this.handleClose} />
        <div className="modal-child">
          <div>
            {this.signupForm()}
            {this.errors()}
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
