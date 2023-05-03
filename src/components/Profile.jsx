import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../App'
import './css/mySearch.css'

const Profile = () => {
const param =useParams()
const {token,setToken}=useContext(AppContext)
const [searchData,setSearchData]=useState([])

//     useEffect(()=>{
// fetch("http://localhost:8000/api/v1/users/"+param.userId,{
//     headers: {
//         'Authorization': `Bearer ${token}`
//       }
// })
// .then(res=>res.json())
// .then(data=>console.log(data))
//     },[])
const searchDataBody =()=>{
  if(searchData.length>0){
    return(
      <div className="user-search">

      {searchData.map((search ,index)=>{
        return(
          <div key={index}>{search.word}
          <div>{search.created_at}</div>
          </div>
        )
      })}
        </div>
    )
  }
  else{
    return <div>there is no search key words</div>
  }
}



useEffect(()=>{
  fetch("http://localhost:8000/api/v1/qualifications/search/history",{
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  })
  .then(res=>res.json())
  .then(data=>setSearchData(data))
},[])
  return (
    <div className="profile">
      <div className="container">
        <h2>your search keywords</h2>
 {searchDataBody()}

      </div>
    </div>
  )
}

export default Profile
