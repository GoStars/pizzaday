import React from 'react'

import {AddItem} from './AddItem.jsx'

export const Items = () => {
    return (
        <div>
            <h1>Menu Items</h1>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </table>
            <AddItem />
            <h1>Edit Item</h1>
        </div>
    )
}