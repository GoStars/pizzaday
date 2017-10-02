import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Header} from './Header.jsx'
import {Footer} from './Footer.jsx'
import {Orders} from './Orders.jsx'
import {Home} from './Home.jsx'
import {Groups} from './Groups.jsx'
import {Register} from './Register.jsx'
import {Users} from './Users.jsx'

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            click: false
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState(prevState => ({
            click: !prevState.click
        }))

        if (this.state.click) {
            console.log('Click!')
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Header />
                            </div>

                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/orders">Orders</Link></li>
                                    <li><Link to="/users">Users</Link></li>
                                    <li><Link to="/groups">Groups</Link></li>
                                </ul>

                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/register" onClick={this.clickHandler}><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
                                    <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>Sign In</Link></li>
                                </ul>
                            </div> 
                        </div>  
                    </nav>
                    
                    <div className="container">
                        <Route exact path="/" component={Home} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/users" component={Users} /> 
                        <Route path="/groups" component={Groups} />
                        <Route path="/register" component={Register} />
                        {/*<Route path="/login" component={Login} />*/} 
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }   
}