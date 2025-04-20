import { useContext } from "react";
import { UserContext } from "./userContext";
import { userType } from "./UserDashboard";

const Profile=()=>{
    const user=useContext<userType|undefined>(UserContext)
    //we have created the context and we are using it Here 
    return(
        <>
         <div>{user?.name}</div>
        </>
    )
}
export default Profile;