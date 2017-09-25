import React from 'react'

export class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // ...
        }
    }

    render() {
        return (
            <div className="myStyle">
                <h3 className="page-header">Registration</h3>
                <form>
                    <label>Name: </label>
                    <input className="form-control" name="" type="text" />
                    <label>Email: </label>
                    <input className="form-control" name="" type="email" />
                    <label>Username: </label>
                    <input className="form-control" name="" type="text" />
                    <label>Password: </label>
                    <input className="form-control" name ="" type="password" />
                    <label>Confirm Password: </label>
                    <input className="form-control" name ="" type="password" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}