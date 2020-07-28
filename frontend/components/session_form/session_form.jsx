import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   update(field) {
  //     return (e) =>
  //       this.setState({
  //         [field]: e.currentTarget.value,
  //       });
  //   }
  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }
  //   handleSubmit(e) {
  //     e.preventDefault();
  //     const user = Object.assign({}, this.state);
  //     this.props.processForm(user);
  //   }

  // renderErrors() {
  //   return (
  // <ul>
  //   {this.props.errors.map((error, idx) => (
  //     <li key={`error--${idx}`}>{error}</li>
  //   ))}
  // </ul>
  //   );
  // }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>{error}</li>
          ))}
        </ul>
      );
    } else {
      return "";
    }
  }

  render() {
    const formType = this.props.formType === "login" ? "login" : "signup";
    return (
      <div>
        <h1>{formType}</h1>
        <form onSubmit={this.handleSubmit}>
          Welcome to Center!
          <br />
          Please {this.props.formType}
          {this.renderErrors()}
          <div>
            <br />
            <label>
              email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput("email")}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
            </label>
            <br />
            {/* <input type="submit" value={this.props.formType} /> */}
            <button type="submit">{formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
