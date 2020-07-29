import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let isLoggedIn;
    if (this.props.currentUser.id) {
      isLoggedIn = <button onClick={this.props.logout}>Sign out</button>;
    } else {
      isLoggedIn = <Link to={"/login"}>Sign in</Link>;
    }
    return (
      <div>
        <Link to={"/"}></Link>
        {isLoggedIn}
      </div>
    );
  }
}

export default Navbar;
