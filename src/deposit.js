import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
export default function Deposit() {
  const ctx = useContext(UserContext);
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("");
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);

  // form validation
  function validate(field, label) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (Number(field) <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit, "deposit")) return;
    var Money = balAnce + Number(deposit);
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Deposited ₹" + deposit);
    console.log(availablebal);
  }

  function refrushForm() {
    setDeposit("");
    setShow(true);
  }

  return (
    <>
      <Card.Body>
        <div className="anu">
          <div class="container5">
            <br />
            <div className="mb-0">
              <center>
                <h3 className="tag1">Deposit In Your Account</h3>
                <br />
              </center>

              {/* <div className="mb-2"> */}
              <label>
                <br />
                <h3 className="tag2">Balance : ₹ {Number(availablebal)}</h3>
              </label>
              {/* </div> */}
              <div>
                <label>
                  <br />
                  <h4 className="numb">Deposit</h4> 
                  <br />
                </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter The Amount... "
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.currentTarget.value))}
                />
              </div>
              <br />
              <div>
                <center>
                  <button
                    type="submit"
                    className="btn btn-warning"
                    disabled={!deposit}
                    onClick={handleCreate}
                  >
                    DEPOSIT
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

            {/* </form> */}
          </div>
        </div>
      </Card.Body>
    </>
  );
}
