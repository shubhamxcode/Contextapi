import React from 'react'
import { useState,useContext } from 'react'
import usercontext from '../Context/Usercontext'
function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")


    const {setuser}=useContext(usercontext)
    const handlesumbit=(e)=>{
        e.preventDefault()
        setuser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username'
        value={username} 
        onChange={(e)=> setusername(e.target.value)}
        />{" "}
        <input type="text" placeholder='password' 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handlesumbit}>Submit</button>
    </div>
  )
}

export default Login
