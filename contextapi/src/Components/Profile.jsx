import React from 'react'
import { useContext } from 'react'
import usercontext from '../Context/Usercontext'

function Profile() {
    const { user } = useContext(usercontext);
    if (!user || !user.username) return <div>Please login</div>;
    return <div>Welcome  {user.username}</div>;
  }
  
export default Profile