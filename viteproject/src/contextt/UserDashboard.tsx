// 💡 What is Context in React?
// In React, Context is a way to share data (like variables, functions, etc.) 
// between components(files) without having to pass props manually at every level.
// To share the data in multiple components
//Previously we are passing in the probs

import Dashbord from './Dashbord'
import { UserContext } from './userContext'
export interface userType{
    name:string,
    isActive:boolean
} 
 const UserDashboard=()=>{ 
    //this is an  object
    const user: userType={
        name:"code",
        isActive:true 
    }
  return(
    <>
    <h1>This is Context</h1>
    {/* <Dashbord user={user}/> */}
    
    
    <UserContext.Provider value={user}>
    {/* Here the value we can use in the Dashbord and ist child elements(file) menas dhantolo unna components kuda */}
    <Dashbord/>
    </UserContext.Provider>
    </>
  )
 }
 export default UserDashboard; 