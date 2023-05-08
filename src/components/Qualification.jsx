import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './css/qulify.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../App'
const Qualification = () => {
    const param =useParams()
    const [data,setData]=useState({})
    const {login,setLogin}=useContext(AppContext)
    const {logFirst,setLogFirst} =useContext(AppContext)
    const {token,setToken}=useContext(AppContext)
    const applyClick =(e)=>{
        if(!login){
          e.preventDefault()
          setLogFirst(true)
        }  }
    useEffect(()=>{
        fetch("http://localhost:8000/api/v1/jobs/"+param.jobId,{
            headers: {
                'Authorization': `Bearer ${token}`,
               
              }
        })
        .then(res=>res.json())
        .then(data=> setData(data.data[0]))
    },[])
  return (
   <div className="qualification">
    <div className="container">
        <div className="job">
            <h1>{data.position}</h1>
            <div className="in-job">
                <div className="des">
                    <h2>description</h2>
                    <span>{data.job_description}</span>
                </div>
                <div className="req">
                    <h2>requirements</h2>
                    <span>{data.requirements}</span>
                </div>
                <div className="salary">
                    <h2>information</h2>
                    <span>salary : {data.salary} $</span>
                    <div>available places : {data.maxCandidateNumber - data.num_applicant}</div>
                    <Link onClick={applyClick} to={`/job/${param.jobId}`}>Apply</Link>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Qualification
