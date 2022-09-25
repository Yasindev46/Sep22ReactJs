import React from "react"
import "./Login.css"

export const Login=()=>{           //naming export
    return(
        <div className="logindiv">
            <h1>Login Here</h1>

            <label className="lgnlbl">Username</label>
            <input className="lgninpt" type="text" placeholder="Username"/> <br/><br/>

            <label className="lgnlbl" >Password</label>
            <input className="lgninpt" type="password" placeholder="Password"/><br/><br/>

            <button className="btn">Submit</button>
            <button className="btn">Cancel</button>
        </div>
    )
}
// export default Login   //default export