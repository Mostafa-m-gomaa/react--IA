import { useContext ,useEffect} from "react";
import "../components/css/Product.css";
import { Link } from "react-router-dom";
import { AppContext } from "../App";



function Job(props) {
  const { product, showbtn } = props;
  const {login,setLogin}=useContext(AppContext)
  const {logFirst,setLogFirst} =useContext(AppContext)

  const applyClick =(e)=>{
    if(!login){
      e.preventDefault()
      setLogFirst(true)
    }  }

    useEffect(() => {
      let timeout;
      if (logFirst) {
        timeout = setTimeout(() => {
          setLogFirst(false);
        }, 2000);
      }
      return () => clearTimeout(timeout);
    }, [logFirst]);
  return (
    <>
     
      <h3>{product.position}</h3>
      {showbtn && (
        <div className="info ">
          <Link onClick={applyClick} to={`/job/${product.id}`}>Apply </Link>
          <Link  to={`/qualify/${product.id}`}>Qualifications </Link>
        </div>
      )}
    </>
  );
}

export default Job;
