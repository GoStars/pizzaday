import React from 'react'
import axios from 'axios'

export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.login = this.login.bind(this)
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    login() {
        axios.post('/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }   

    render() {
        return (
            <form>
                <label htmlFor="inputEmail">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={this.handleEmailChange} 
                    id="inputEmail" 
                    required 
                />
                <label htmlFor="inputPassword">Password</label>
                <input 
                    type="password" 
                    name="pswd" 
                    onChange={this.handlePasswordChange} 
                    id="inputPassword" 
                    required 
                />
                <button 
                    type="submit" 
                    onClick={this.login}>
                    Login
                </button>
            </form>
        )
    }
}