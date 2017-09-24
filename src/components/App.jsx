import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Header} from './Header.jsx'
import {Orders} from './Orders.jsx'
import {Group} from './Group.jsx'

export class App extends React.Component {
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

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className="container">
                <Header /> 
                <p className="text-center">Hello, {this.props.name}!</p>
                <hr />
                <Orders />
                <hr />
                <Group />
                <h3>Users</h3>
                {this.state.users.map(user => 
                    <div key={user.id}>{user.username}</div>
                )}
            </div>
        )
    }
}

App.propTypes = {
    name: PropTypes.string.isRequired
}

App.defaultProps = {
    name: 'Stranger'
}