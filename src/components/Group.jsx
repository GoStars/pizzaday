import React from 'react'

export const Group = () => {
    return (
        <div>
            <h1>Create group</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" required />
                    <label>Image/Logo</label>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}