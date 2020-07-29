// import React from "react";

// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { email: "", password: "" };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInput(field) {
//     return (e) => this.setState({ [field]: e.currentTarget.value });
//   }
//   // handleSubmit(e) {
//   //   e.preventDefault();
//   //   this.props.processForm(this.state);
//   // }
//   handleSubmit(e) {
//     e.preventDefault();
//     let user = Object.assign({}, this.state);
//     this.props.signUp(user);
//   }
//   errors() {
//     // if (this.props.errors) {
//     //   return (
//     //     <ul>
//     //       {this.props.errors.map((error, idx) => (
//     //         <li key={`error-${idx}`}>{error}</li>
//     //       ))}
//     //     </ul>
//     //   );
//     // } else {
//     //   return "";
//     // }
//     let errors = this.props.errors ? this.props.errors : "";
//     let errorMessages = errors.map((error, key) => (
//       <div key={key}>{error}</div>
//     ));
//     return <div>{errorMessages}</div>;
//   }

//   signUpForm() {
//     const formType = this.props.formType === "login" ? "login" : "signup";
//     return (
//       <div>
//         <h1>{formType}</h1>
//         <form onSubmit={this.handleSubmit}>
//           Welcome to Center!
//           <br />
//           Please {this.props.formType}
//           {this.errors()}
//           <div>
//             <br />
//             <label>
//               email:
//               <input
//                 type="text"
//                 value={this.state.email}
//                 onChange={this.handleInput("email")}
//               />
//             </label>
//             <br />
//             <label>
//               Password:
//               <input
//                 type="password"
//                 value={this.state.password}
//                 onChange={this.handleInput("password")}
//               />
//             </label>
//             <br />
//             {/* <input type="submit" value={this.props.formType} /> */}
//             <button type="submit">Continue</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
//   render() {
//     return (
//       <div>
//         {this.errors()}
//         {this.signUpForm()}
//       </div>
//     );
//   }
// }

// export default SessionForm;
