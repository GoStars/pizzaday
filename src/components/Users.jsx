import React from 'react'

export class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('/api')
            .then(res => res.json())
            .then(users => this.setState({users}))
    }

    render() {
        return (
            <div>
                <h3>Users</h3>
                {this.state.users.map(user => 
                    <div key={user.id}>{user.username}</div>
                )}
            </div>
        )
    }
}

