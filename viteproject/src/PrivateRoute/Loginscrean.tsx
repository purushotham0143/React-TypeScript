import { useContext, useRef } from "react";
import { Logincontext, UserType } from "./Logincontext";
import { UserContext } from "../contextt/userContext";

const Loginscrean=()=>{
    const inputref=useRef<HTMLInputElement|null>(null)
    const userContext=useContext<UserType|undefined>(Logincontext)  //Inittialy we fetching data from logincontext
    const loginhandaler=()=>{
        console.log(inputref.current?.value)
     userContext?.setName(inputref.current?.value);  //here both context and state will change the value
    }
    const logoutHandler=()=>{
      userContext?.setName(undefined);
    }
    if(inputref?.current)
      return <button onClick={logoutHandler}>Logout</button>
return(
    <>
  <div style={{ margin: "50px" }}>
    <div></div>
    <input type="text" ref={inputref} placeholder="Enter Your name" />
    <button onClick={loginhandaler}>Submit</button>
  </div>

    </>
)
}
export default Loginscrean;