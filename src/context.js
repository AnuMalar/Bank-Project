// import { createContext } from "react";
// const UserContext = createContext(null);
// export default UserContext;
import { createContext } from "react";

let value={
       users: [
         {
           name: "guest",
           email: "guest@gmail.com",
           password: "secret@123",
           balance: 0,
         }
       ],
       loginuser:[]

     }

     const UserContext = createContext(value);

export default UserContext;

// value={{
        //   users: [
        //     {
        //       name: "guest",
        //       email: "guest@gmail.com",
        //       password: "secret",
        //       balance: 0,
        //       show:false
        //     }
        //   ]
        // }}