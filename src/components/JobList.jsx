import "../components/css/productsList.css";
import { useContext, useEffect, useState } from "react";
import Job from "./Job";
import { BiSearchAlt} from "react-icons/bi";
import { AppContext } from "../App";


function JobsList() {
  const {token,setToken}=useContext(AppContext)
  const {login,setLogin}=useContext(AppContext)
  const [jobs, setJobs] = useState([]);
  const [keyWord,setKeyWord]=useState("")
  const handleKeyWord =(e)=>{
    setKeyWord(e.target.value)
  }

  const api_url = "http://localhost:8000/api/v1/jobs";

  const getjobs = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  };


  const searchButon=(e)=>{
    e.preventDefault()
    fetch("http://localhost:8000/api/v1/qualifications/search",{
      method:'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "keyword":keyWord,
        
    })

    })
    .then(res=>res.json())
    .then(data=>{
      if(data.result== 0){
        console.log("sayed")
      }
      else{
        setJobs(data.data)
      }
    })
  }

  

  useEffect(() => {
    getjobs();
   
  }, []);

  return (
    <>
      <div className="services">
        <div className="service-cont">

        <h2 className="main-title">Jobs</h2>
        <form action="" onSubmit={searchButon}>
          <input type="text"  placeholder="Search By Qualification" value={keyWord} onChange={handleKeyWord} />
         
          {login? <button type="submit"><BiSearchAlt/></button> : 
          <span><BiSearchAlt/> </span>}
          <span onClick={getjobs}>All Jobs</span>
        </form>
        <div className="container">
          {jobs.map((job) => {
            return (
              <div className="box" key={jobs.id}>
                <Job product={job} showbtn={true} />
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
}

export default JobsList;
