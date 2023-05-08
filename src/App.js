import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import About from "./components/MyApp";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useEffect ,useState ,createContext } from "react";
import JobsList from "./components/JobList";
import JobForm from "./components/JobForm";
import Profile from "./components/Profile";
import Qualification from "./components/Qualification"
import MyApp from "./components/MyApp";


export const AppContext=createContext()
function App() {
  const [login,setLogin] =useState(false)
  const [token,setToken] =useState("")
  const [id,setId] =useState("")
  const [spinner ,setSpinner]=useState(false)
  const [logFirst,setLogFirst]=useState(false)


  useEffect(()=>{
    if (JSON.parse(sessionStorage.getItem("login"))){
      setLogin(true)
  }
  else(
    setLogin(false)
  )

  },[login])
  useEffect(()=>{
    if (sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
  }
  else{
    setToken("")
  }
  
  },[login])

  useEffect(()=>{
    if (sessionStorage.getItem("id")){
      setId(sessionStorage.getItem("id"))
  }
  else {
    setId("")
  }
  
  },[login])

  


  

  return (
<AppContext.Provider value={{spinner,setSpinner ,login,setLogin, logFirst,setLogFirst ,token,setToken ,id,setId}}>
<div className="App">
{spinner ?  <div className="chase">
  <div className="spinner">
  <div className="rect1"></div>
  <div className="rect2"></div>
  <div className="rect3"></div>
  <div className="rect4"></div>
  <div className="rect5"></div>
</div>
  </div> : null}

 {logFirst ? <div className="log-first">
    <span>please login first</span>
    <Link to="login">Login</Link>
  </div> :null}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <JobsList />
            </>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="my-application" element={<MyApp/>} />
        <Route path="job/:jobId" element={<JobForm />} />
        <Route path="my-profile/:userId" element={<Profile />} />
        <Route path="qualify/:jobId" element={<Qualification />} />
      </Routes>
      <Footer />
    </div>
</AppContext.Provider>

  
  );
}

export default App;
