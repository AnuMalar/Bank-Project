import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);

  // form validation
  function validate(field, label) {
    if (isNaN(field)) {
      setStatus("Error: " + label);
      alert("Please Enter Valid Number");
      return false;
    }
    if (field <= 0) {
      setStatus("Error: " + label);
      alert(" Please Enter a Value greater than 0");
      return false;
    }
    if (field >= balAnce) {
      setStatus("Error: " + label);
      alert("Oops,Insufficient Balance");
      return false;
    }
    
    return true;
  }

  function handleCreate() {
    if (!validate(withdraw, "withdraw")) return;
    var Money = balAnce - withdraw;
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Withdraw ₹" + withdraw);
  }
  function refrushForm() {
    setWithdraw("");
    setShow(true);
  }
  return (
    <>
      <Card.Body>
        <div className="hello">
          <div class="container5">
            <br />
            <div className="mb-0">
              <center>
                <h3 className="tag1">Withdraw In Your Account</h3>
                <br />
              </center>

              <label>
                <br />
                <h3 className="tag2">Balance : ₹ {availablebal}</h3>
              </label>
              <div>
                <label>
                  <br />
                  <h4 className="numb">Withdraw</h4>
                  <br />
                </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter The Amount... "
                  value={withdraw}
                  onChange={(e) => setWithdraw(Number(e.currentTarget.value))}
                />
              </div>
              <br />
              <div>
                <center>
                  <button
                    type="submit"
                    className="btn btn-warning"
                    disabled={!withdraw}
                    onClick={handleCreate}
                  >
                    WITHDRAW
                  </button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </center>
              </div>
              <br />
            </div>
          </div>
        </div>
      </Card.Body>
    </>
  );
}
