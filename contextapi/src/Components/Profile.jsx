import React from 'react'
import { useContext,useState } from 'react'
import usercontext from '../Context/Usercontext'

function Profile() {
    const {user}=useContext(usercontext)
    if (!user) return <div> pls login</div>
    return <div>welcome{user.username}</div>
}

export default Profile