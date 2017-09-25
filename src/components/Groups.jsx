import React from 'react'

export class Groups extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            click: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            click: !prevState.click
        }))
    }

    render() {
        if (this.state.click) {
            return (
                <div>
                    <h1>Create Users Group</h1>
                    <form>
                        <label>Name: </label>
                        <input className="form-control" name="" type="text" />
                        <label>Image/Logo: </label>
                        <input className="form-control" name="" type="text" />
                        <label>Menu Items: </label>
                        <input className="form-control" name="" type="text" />
                    </form>
                </div>
            )   
        } else {
            return (
                <div>
                    <button className="btn btn-primary"
                        onClick={this.handleClick}>Create Group
                    </button>
                </div>
            )     
        }   
    }
}