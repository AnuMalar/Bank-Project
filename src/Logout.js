import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Logout({setshow}){
    const navigate=useNavigate();
    const logfunction=()=>{
        setshow(false)
        navigate('/home')
    }
    return(
        <div>      
            <p className="log">Thank You Dear Customers....Happy visit!...</p>
           <Button className="bg-warning" onClick={logfunction}>Logout</Button>
        </div>
  
    )
}