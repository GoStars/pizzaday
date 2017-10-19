import React from 'react'

export const AddItem = () => {
    return (
        <div>
            <h1>Add Item</h1>
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    required 
                />
                <label>Price</label>
                <input 
                    type="text" 
                    name="price" 
                    required 
                />
                <button 
                    type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}