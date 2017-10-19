import React from 'react'

import {Header} from './Header.jsx'
import {SignUp} from './SignUp.jsx'
// import {Items} from './Items.jsx'
// import {Order} from './Order.jsx'
// import {Users} from './Users.jsx'
// import {Group} from './Group.jsx'-+

export const App = () => {
    return (
        <div className="container">
            <Header />
            <SignUp />
        </div>
    )
}