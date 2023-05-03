import "../components/css/productDetails.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import App, { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
function JobForm() {

  // const api_url = "https://fakestoreapi.com/products";
  const history =useNavigate()
  const params = useParams();
  const [message ,setMessage]=useState("")
  const {token,setToken}=useContext(AppContext)
  const {spinner,setSpinner}=useContext(AppContext)

  const handleMessage =(e)=>{
    setMessage(e.target.value)
  }

  const handleSubmit =(e)=>{
    setSpinner(true)
    e.preventDefault()
    fetch("http://localhost:8000/api/v1/applications",{
      method :"POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "job_id":params.jobId,
        "attachment":message,
    })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.message=="applications send successfully"){
        setSpinner(false)
        history("/")
      }
    })
  }
  

  // useEffect(() => {
  //   fetch(`${api_url}/${params.productId}`)
  //     .then((res) => res.json())
  //     .then((product) => setProduct(product));
  // }, []);

  return (
    <>
     
      <div class="application">
        <div class="container">
          <h2>Application</h2>
          <form action="" onSubmit={handleSubmit}>
            <div class="abox">
              <textarea value={message} onChange={handleMessage} name="message" placeholder="what make you best choice for this job"></textarea>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default JobForm;
