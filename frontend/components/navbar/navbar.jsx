// import React from "react";
// import { Link } from "react-router-dom";

// // class Navbar extends React.Component {
// //   constructor(props) {
// //     super(props);
// //   }
// //   render() {
// //     let isLoggedIn;
// //     // debugger;
// //     // if (this.props.currentUser.id !== null) {
// //     if (this.props.currentUser.id) {
// //       return <button onClick={this.props.logout}>Sign out</button>;
// //     } else {
// //       //   return isLoggedIn = (
// //       return (
// //         <>
// //           <Link to={"/login"}>Sign in</Link>
// //           <Link to={"/signup"}>Sign up</Link>
// //         </>
// //       );
// //     }
// //     return (
// //       <div>
// //         <Link to={"/"}></Link>
// //         {isLoggedIn}
// //       </div>
// //     );
// //   }
// // }
// // export default Navbar;

// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let loggedIn;
//     if (this.props.currentUser.id) {
//       loggedIn = (
//         <button className="LogoutBtn" onClick={this.props.logout}>
//           Sign out
//         </button>
//       );
//     } else {
//       loggedIn = (
//         <Link className="logbtn" to="/login">
//           Login
//         </Link>
//       );
//     }
//     return (
//       <div>
//         <Link to={"/"}></Link>
//         {LoggedIn}
//       </div>
//     );
//   }
// }

// export default Navbar;

// // let loggedIn;
// // if (this.props.currentUser.id) {
// //   loggedIn = (
// //     <button className="LogButton" onClick={this.props.logout}>
// //       Logout
// //     </button>
// //   );
// // } else {
// //   loggedIn = (
// //     <Link to="/login" className="LogButton">
// //       Login
// //     </Link>
// //   );
// // }

// ----------------------------------------------------------------
import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let loggedIn;
    if (this.props.currentUser) {
      loggedIn = (
        <button className="logout btn" onClick={this.props.logout}>
          Signout
        </button>
      );
    } else {
      loggedIn = (
        <div className="out-border">
          <nav className="navbar">
            <div className="center">Center</div>
            <div className="middle-box">
              <div>Subscribe</div>
              <div>Write</div>
              <div>
                {" "}
                <div>
                  <Modal />
                  <Link className="login-btn" to="/login">
                    Sign in
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Link className="signup-btn" to="/signup">
                Get started
              </Link>
            </div>
          </nav>
        </div>
      );
    }
    return (
      <div>
        <Link to="/login"></Link>
        {loggedIn}
      </div>
    );
  }
}

export default Navbar;

// <div className="out-most-border">
//   <div className="outer-border">
//     <div className="subouter-border">
//       <div className="subsubouter-border">
//         <div className="login-border">
//           <span className="center">Center</span>
//           <Link className="login-btn" to="/login">
//             Sign in
//           </Link>
//           <Link className="signup-btn" to="/signup">
//             Get started
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
