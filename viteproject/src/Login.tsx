import { useState } from "react";

// state management:-we are maintaing  state for component in react in js we have to update  the changed varible in the ui but the value will be changed but it is not updated in the ui  Here in react it
// will automitically update the varible in the Ui Here in functional componant we are maintaing the state of the varible when it is re-rednering 
//it will check the previous state  Where it will get change there only it will change 
//Hooks:functional Component Directly can't maintain the state so we have an additional Features called Hooks used to maintain the state 


// const Login=()=>{
    // const state=useState();
    // console.log(state);
    //use state will return two parameters with size 2 and one is varible
    // another is function 
    //let  [data,setData]=useState("Hi");   if you give here let if you are changeing the data="Bye" it change but not update in the Ui int cont  You can't Directlly update the data 
    // You have to Update it using the Function only
    // const [data,setData]=useState("Hi"); 
    // const clickHandler=()=>{
    //     //data="Bye";
    //     setData("Bye");

    //    // console.log(data);

    // }
    // return (
    //     <>
    //     {/* {data} */}
    //     <div>This is value {data}</div>
    //     <button onClick={clickHandler}>Change</button>
    //     </>
    // )
    
// }



type UserType={
    name:string,
    email:string
}
const Login=()=>{
    const [isLoggedIn,setLogin]=useState(false);
    const [user,setUser]=useState<UserType|null>(null);
    //const [user,setUser]=useState<UserType>({} as UserType);

    const loginHandler=()=>{
        setLogin(true);
        setUser({name:"Code",email:"Email@"})
    }
    const logoutHandler=()=>{
        setLogin(false);
        setUser(null)
        
    }
    return (
        <>
           <div> {isLoggedIn?'Logged in':'Logged out'}</div>
            {user?.name} {user?.email}
            <button onClick={loginHandler}>Log in </button>
            <button onClick={logoutHandler}>Log out</button>
        </>
    )
}
export default Login;




// npm install tailwindcss@3
// npx tailwindcss@3 init
// npm tailwindcss@3 -i ./ -o ./

//1. npm install tailwindcss @tailwindcss/vite
//2. vite.config
//  a. import tailwindcss from '@tailwindcss/vite'
//  b. plugins:[react(),tailwindcss()
//3. index.css
// @import "tailwindcss";