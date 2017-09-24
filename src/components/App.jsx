import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Header} from './User.jsx'

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div>
                    <p className="text-center">Hello, {this.props.name}!</p>
                    <ul>
                        <li>Order1</li>
                        <li>Order2</li>
                        <li>Order3</li>
                    </ul>
                </div>
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