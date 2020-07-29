import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
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
        <form>
          <h2>Sign Up</h2>
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
      <div>
        {this.signupForm()}
        {this.errors()}
      </div>
    );
  }
}
export default Signup;
