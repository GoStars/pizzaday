import React from 'react'

export class Orders extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            click: true,
            order: 'Order1'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState(prevState => ({
            click: !prevState.click
        }))

        if (this.state.click) {
            return this.state.order = 'Pizza'
        }
    }

    render() {
        return (
            <div>
                <h3>Orders:</h3>
                <ul>
                    <li>{this.state.order}</li>
                </ul>
                <button className="btn btn-default" 
                    onClick={this.clickHandler}>Check Orders
                </button> 
            </div>
        )
    }
}