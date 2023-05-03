import React from 'react'
import { Link } from 'react-router-dom'
import './css/login.css'
import { useState, useEffect } from 'react'
import { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

const Login = () => {
  const history =useNavigate()
const   {login,setLogin}=useContext(AppContext)
const {spinner,setSpinner}=useContext(AppContext)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [wrong,setWrong]=useState(false)

  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }

  const handleLogin = async (event) => {
    setSpinner(true)
    event.preventDefault();
  

    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email":email,
          "password":password,
      })
      })
      .then(res=>res.json())
      if (response.token) {
       
        sessionStorage.setItem("login",true)
        sessionStorage.setItem("id",response.data.id)
        sessionStorage.setItem("token",response.token)
        setSpinner(false)
        setLogin(true)
        history("/")
        // window.location.reload();
        
        
        // Add code to handle successful submission
      } else {
      setWrong(true)
      
      setSpinner(false)
      }
    } catch (error) {
      setWrong(true)
      setSpinner(false)

    
    }
  };







  return (
    <div className="login">
        <div className="container">
            <div className="login-text">
            <h2>welcome to jobaya</h2>
           
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptates laudantium consequuntur ea, placeat blanditiis eaque, saepe vitae nesciunt officia dolorem libero quia sequi cum? Nulla ducimus debitis voluptatum perferendis.</p>
            </div>
            <form onSubmit={handleLogin}>
            <h2>Login</h2>
            {wrong?<div className='wrong'>Wrong password or Email</div>:null}

            <input onChange={handleEmail} value={email} type='text' placeholder='enter your email'/>
            <input onChange={handlePassword} value={password} type='password' placeholder='enter password'/>
            <button type='submit'>Login</button>
            <Link to="/sign-up">Sign Up</Link>

            </form>
        </div>
    </div>
  )
}  

export default Login
