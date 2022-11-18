import { useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
export default function AllData() {
  const ctx = useContext(UserContext);
  const data=ctx.users;
  console.log(data)
  function renderTableHeader() {
    let header = Object.keys(ctx.users[0]);
    return header.map((value, index) => {
      return <th style={{border:'2px solid black'}}>{value}</th>;
    });
  }
  function renderTableData() {
    return ctx.users.map((user, index) => {
      const { name, email, password, balance } = user; //destructuring
      console.log(user)  
      return (
        <tr>
          <td style={{border:'2px solid black'}}>{name}</td>
          <td style={{border:'2px solid black'}}>{email}</td>
          <td style={{border:'2px solid black'}}>{password}</td>
          <td style={{border:'2px solid black'}}>{balance}</td>
        </tr>
      );
    });
  }
  console.log(renderTableHeader);
  return (
    <Card>
      <Card.Header className="bg-warning">All Transactions</Card.Header>
      <Card.Body>
        {" "}
        {
          <>
            <br />
            <table style={{border:'2px solid black'}}>
              <tr style={{border:'2px solid black'}}>{renderTableHeader()} </tr>
              {/* <th>Name</th>
            <tr>{data.name}</tr> */}
          {/* <td>{email}</td>
          <td>{password}</td>
          <td>{balance}</td> */}
        
              {renderTableData()}
            </table>
            <br />
          </>
        }
      </Card.Body>
    </Card>
  );
}
