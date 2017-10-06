import React from 'react'

export const Login = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" required />
                    <label>Password</label>
                    <input type="password" name="pswd" required />
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}