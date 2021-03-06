import { application } from 'express';
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';



export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormChange(event) {
        const target = event.target;
        this.setState({ [target.name]: target.value });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        // COME BACK TO THIS: Make a post request to server
        // something like this... fetch(POST, {username: this.state.username, password: this.state.username})
        console.log('Form submitted\n', this.state.password, this.state.username);

        // fetch('/login', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json', 
        //     },
        //     body: JSON.stringify({
        //         username: this.state.username, 
        //         password: this.state.password,
        //     }),
        // });
    }

    render() {
        return (
            <div>
                {/* create a post request form with username and password entries with a login button */}
                <form onSubmit={this.handleFormSubmit}>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleFormChange} placeholder="Username" />
                    <input name="password" type="text" value={this.state.password} onChange={this.handleFormChange} placeholder="Password" />
                    <input type="submit" value="Log In" />
                </form>
                {/* create a signup button which redirects react to signup component */}
                <Link to="/signup">
                    <button>Sign Up</button>
                    {/* <a href="/signup"><button>Sign Up</button></a> */}
                </Link>
                {/* have conditionally rendered div for error message if server cannot verify login */}
            </div>

        )
    }
}