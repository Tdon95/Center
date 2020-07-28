import React from "react";

class Login extends React.Component {
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
    this.props.login(user);
  }

  loginForm() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <h2>Log in</h2>
          <label>Email</label>
          <input
            placeholder="Email"
            type="text"
            name="email"
            onChange={this.handleInput("email")}
            value={email}
          />
          <label></label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={this.handleInput("password")}
            value={password}
          />
          <button onClick={this.handleSubmit} className="LogButton">
            Log in
          </button>
        </form>
      </div>
    );
  }
  errs() {
    return <div>{this.props.errors}</div>;
  }

  render() {
    const errors = this.props.errors ? this.errs() : "";
    return (
      <div>
        {this.loginForm()}
        {errors}
      </div>
    );
  }
}

export default Login;
