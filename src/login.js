import { useState, useContext } from "react";
import UserContext from "./context";
import VarContext from "./varcontext";
import LoginContext from "./logincontext";



 
export default function Login({setshow}) {
  const ctx = useContext(UserContext);
  const vtx = useContext(VarContext);
  const ltx = useContext(LoginContext);
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  
 
  console.log(useremail);
  console.log(userpassword);

  function handleCreate(e) {
       e.preventDefault();
     let value=ctx.users.map((user,index)=>{
       if(user.email == useremail && user.password == userpassword){
           setshow(true);
           ctx.loginuser.push({
            name: user.name,
            email: user.email,
            password: user.password,
            balance: user.balance
          });
          console.log(ctx.loginuser );
           return user;
         }
       })
       console.log(value);
      
    
  }

  return (
    <>
     <div id="card">
        <div class="shadow p-3 mb-5 bg-body rounded">
        <div class="card bg-secondary text-white">

          <div class="card-header" id="head">
            <h1>Login Your Account</h1>
          </div>
          </div>

          <form onSubmit={handleCreate}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="name"
                placeholder="Enter the email"
                onChange={(e) => setUseremail(e.target.value)}
                value={useremail}
              />
              <div class="error"></div>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter a Password"
                onChange={(e) => setUserpassword(e.target.value)}
                value={userpassword}
              />
              <div class="error"></div>
            </div>
            <input type="submit" class="btn btn-warning" />
            <br></br>
           
          </form>
        </div>
      </div>
     
    </>
  );
}

