import { useContext } from 'react'
import  {userType} from './UserDashboard'
import { UserContext } from './userContext'
import Profile from './Profile'
const Slider=()=>{
    const user=useContext<userType|undefined>(UserContext)
    //we have created the context and we are using it Here 
    return(
        <>
         <div>{user?.name}</div>
         <Profile/>
        </>
    )
}
export default Slider;