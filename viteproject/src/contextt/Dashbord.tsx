import { useContext } from 'react'
import Sidebar from './Sidebar'
import  {userType} from './UserDashboard'
import { UserContext } from './userContext'
// type Dashbord={
//     user:userType
// }
//here we are Getting the data in the probs
// const Dashboard=(prob:Dashbord)=>{
//     return(
//         <>
//          <div>prob.user.name</div>
//          <div>prob.isActive</div>
//          <Sidebar user={prob.user.name}/>
//          <Profile user={prob.user.name}/>
//         </>
//     )
// }
// export default Dashboard;


//here we are getting the data using the Context
const Dashboard=()=>{
    const user=useContext<userType|undefined>(UserContext)
    //we have created the context and we are using it Here 
    return(
        <>
         <div>{user?.name}</div>
         <Sidebar/>
        </>
    )
}
export default Dashboard;