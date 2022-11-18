import { Card } from "react-bootstrap";
import Bank from "./bank5.jpg";

import "./styles.css";

export default function Home() {
  return (
    <>
    {/* <p className="headp">Online Banking</p> */}


  
<div style={{padding:"2em"}}>

      <center>
      <Card style={{ width: "24em",height:"31em"}}>
        <h1 style={{color:'darkslategrey'}}>Online Banking</h1>
        <Card.Img variant="top" src={Bank} />
         <Card.Body>
          {/* <Card.Title className="hlo" >Online Banking</Card.Title>  */}
            <Card.Text>
             Welcome to the bank. You can move around using the navigation bar. 
          </Card.Text>
        </Card.Body> 
      </Card>
      </center>
      </div>
      
    </>
  );
}


