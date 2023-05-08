import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import './css/about.css'

const MyApp = () => {
  const {id,setId}=useContext(AppContext)
  const {token,setToken}=useContext(AppContext)
  const [appData,setAppData]=useState([])

  useEffect(()=>{
    fetch("http://localhost:8000/api/v1/applications/myapplications",{
   
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
    .then(res=>res.json())
    .then(data=>setAppData(data.data))
  },[])

console.log(appData)
  return (
<div className="my-app">
  <h2>my applicaion</h2>
  <div className="container">
    {appData.map((app)=>{
      return(
        <div className="app" key={app.id}>

          <span>position : {app.position}</span>
          <span>atachment : {app.attachment}</span>
          <span>state : {app.status}</span>
        </div>
      )
    })}
  </div>
</div>
  )
}

export default MyApp
