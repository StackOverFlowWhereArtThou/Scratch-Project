// import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';

// export default class SignupPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//         };

//         this.handleFormChange = this.handleFormChange.bind(this);
//         this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     }

//     handleFormChange(event) {
//     }

//     handleFormSubmit(event) {

//     }

//     render() {
//         return (
//             <div>
//                 {/* create a post request form with username and password entries with a login button */}
//                 <form onSubmit={this.handleFormSubmit}>
//                     <input name="username" type="text" value={this.state.username} onChange={this.handleFormChange} placeholder="Create username" />
//                     <input name="password" type="text" value={this.state.password} onChange={this.handleFormChange} placeholder="Create password" />
//                 </form>

//                 {/* create a signup button which redirects react to signup component */}
//                 <Link to="/createUser">
//                     <button>Create Account</button>
//                 </Link>

//                 {/* have conditionally rendered div for error message if server cannot verify login */}
//             </div>
//         )
//     }
// }