import { useContext } from "react";
import { useFormik } from "formik";
import UserContext from "./context";


export default function CreateAccount() {
  const ctx = useContext(UserContext);
 

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values);
      alert("Account was successfully created");
      ctx.users.push({
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
        role:"user",
        balance: 0
      });
    },
    validate: (values) => {
      const letters = /^[A-Za-z]+$/;
      const emaildefault = /^[a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-z0-9]@[a-z0-9][-\.]{0,1}([a-z][-\.]{0,1})*[a-z0-9]\.[a-z0-9]{1,}([\.\-]{0,1}[a-z]){0,}[a-z0-9]{0,}$/i;
      const passworddefault = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i;
      let errors = {};

      if (!values.name) {
        errors.name = "Required Name";
        
      }else if (!letters.test(values.name)) {
        errors.name = "Enter alphabets only";
      }
       else if (values.name.length > 15) {
        errors.name = "Must be 15 characters or less";
      }
      if (!values.email) {
        errors.email = "Required Email";
      } else if (!emaildefault.test(values.email)) {
        errors.email = "please enter a valid email";
      }
      if (!values.password) {
        errors.password = "Required password";
      } else if (!passworddefault.test(values.password)) {
        errors.password =
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character";
      }
      return errors;
    }
  });

  return (
    <>
     
      <div id="card">
        <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <div class="card bg-secondary text-white">

          <div class="card-header" id="head">
            <h1>Create User Account</h1>
          </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <div class="error">
                {formik.errors ? formik.errors.name : null}
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email 
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter the email address"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              <div class="error">
                {formik.errors ? formik.errors.email : null}
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter a new Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div class="error">
                {formik.errors ? formik.errors.password : null}
              </div>
            </div>
            <input type="submit" class="btn btn-warning" />
            
          </form>
        </div>
        </div>
      
     
    </>
  );
}
