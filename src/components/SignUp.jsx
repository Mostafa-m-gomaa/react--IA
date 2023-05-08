import React from 'react'

import { Link } from 'react-router-dom'
import "./css/signUp.css"

import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../App'

const SignUp = () => {

  const history =useNavigate()
  const {spinner,setSpinner}=useContext(AppContext)
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [phone,setPhone]=useState("")


  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }
  const handleConfirmPassword =(e)=>{
    setConfirmPassword(e.target.value)
  }
  const handleName =(e)=>{
    setName(e.target.value)
  }
  const handlePhone=(e)=>{
    setPhone(e.target.value)
  }


  const handleLogin = async (event) => {
    setSpinner(true)
    event.preventDefault();
  
    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('email', email);
    // formData.append('password', password);
    // formData.append('phone', phone);

    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            "name":name,
            "email":email,
            "password":password,
            "phone":phone,
            "passwordConfirm":confirmPassword
        }),
      })
      .then(res=>res.json())
      if (response.message) {
        
        history("/login")
        setSpinner(false)

     
    
      } else {
      
     
      setSpinner(false)
      console.log(response)
      }
    } catch (error) {
    
      setSpinner(false)
    
    }
  };
  useEffect(()=>{
fetch("http://localhost:8000/api/v1/users")
.then(res=>res.json())
.then(data=>console.log(data))
  },[])

  return (
    <div className="sign-up">
        <div className="container">
        <div className="login-text">
            <h2>welcome Jobaya</h2>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptates laudantium consequuntur ea, placeat blanditiis eaque, saepe vitae nesciunt officia dolorem libero quia sequi cum? Nulla ducimus debitis voluptatum perferendis.</p>
            </div>
            <form onSubmit={handleLogin}>
            <h2>Sign Up</h2>

            <input value={email} onChange={handleEmail} type='text' placeholder='Email'/>
            <input value={password} onChange={handlePassword} type='password' placeholder='Password'/>
            <input value={confirmPassword} onChange={handleConfirmPassword} type='password' placeholder='Password'/>
            <input value={name} onChange={handleName} type='text' placeholder='Your Name'/>
            <input value={phone} onChange={handlePhone} type='text' placeholder='Phone Number'/>
           
            <button type='submit'>Sign Up</button>
          

            </form>
        </div>
    </div>
  )
}

export default SignUp
