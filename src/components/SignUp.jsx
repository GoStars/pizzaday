import React from 'react'
import axios from 'axios'

export class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            email:'',
            password:''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.signUp = this.signUp.bind(this)
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    signUp() {
        axios.post('/signup', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <h1>Create an account</h1>
                <form>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        onChange={this.handleUsernameChange}
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        onChange={this.handleEmailChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="pswd"
                        onChange={this.handlePasswordChange} 
                        required 
                    />
                    <button 
                        type="submit" 
                        onClick={this.signUp}>
                        Sign Up
                    </button>
                </form>
            </div>
        ) 
    }  
}