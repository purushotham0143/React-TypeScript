import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Logincontext, UserType } from "./Logincontext";


const Privateroute=()=>{
const Context=useContext<UserType|undefined>(Logincontext)
// const navigate=useNavigate(); // we  will not use this beccause  it will not immidetely not render the page 
// and it has another paramete broswer Refresh and by doing Refresh your context data will gone  so we use Direct Navigate Link
return(
    <>
    {/* this is the main private Routing Here  */}
    {Context?.name?<Outlet/>:<Navigate to="/Login"/>}
    </>
)
}
export default Privateroute;