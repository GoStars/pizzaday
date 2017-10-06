import React from 'react'

export const SignUp = () => {
    return (
        <div>
            <h1>Create an account</h1>
            <form>
                <div>
                    <input type="text" placeholder="Username" name="username" required />
                    <input type="email" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Password" name="pswd" required />
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}