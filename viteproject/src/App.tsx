// import './App.css'
// import Button from './button';
// import Greet from './Greet'
// import results from "./data.json";
// import Paresnt from "./Parent"
// import Controls from './controls';
// import Login from './Login';
// import Fetch from './Fetch';
// import CTimer from './CTimer';
// import Text from './Text';



// const clickHandler=(e:React.MouseEvent)=>{
//   let target=e.target as HTMLButtonElement; // THis is also Type casting 

//   alert(target.innerText+ " Button Clicked");

// }
// const clickHandlerClick=(e:React.MouseEvent)=>{  // Here we are type casting  Because we dont have  e.target in the Type script
//   let target=e.target as HTMLButtonElement;

//   alert(target.innerText+ " Button Clicked");

// }

// function App(){
//   let data=10;
//   return (
//      <>   
//      {/* this is  Reacct Fragment */}
//     {/* <div>App Component</div> */}
//     {/* <Greet name="Code" years={data} data={results}/> */}
//     {/* <Greet name="Quotient"/> */}
//     {/* <Button  value="Senddata" click={clickHandler}   />   {/* Here we are not writing Here function We are  writing her Reference*/ } */}
//     {/* <Button value="Click" click={clickHandlerClick}/>  */}
//     {/* <Login/>
//     <Controls/>
//      <Paresnt/>
//      <Fetch/>
//      <CTimer/>
//      <Text /> */}
//     </>
//   )
// }

// export default App;



// import './App.css'
// import { Routes, Route } from 'react-router-dom';
// import Home from './Routerr/Home'; 
// import About from './Routerr/about'
// import Contact from './Routerr/Contact'
// import Login from './Routerr/Login';
// import Masterlayout from './Routerr/Masterlayout';


// //THis is only Routeing 
// function App(){
//   return (
//      <>   
//      <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about/:city" element={<About/>}/>
//       <Route path="/Contact" element={<Contact/>}/>
//       <Route path="/Login" element={<Login/>}/>
//       <Route path="*" element={<div>Page Not Found</div>}/>


//        {/* Nested Routing  */}
//        <Route path='/product' element={<Masterlayout/>}>
//        <Route path='cloth' element={<div>Welcome to cloth</div>}/>
//        <Route path='elect' element={<div>Welcome to Electric</div>}/>
//       </Route>
//      </Routes>
     
    
//     </>
//   )
// }

// export default App;


//Here we using another Method of Routing :Here Browser only create the Routes
//We dont need <BrowserRoutes></BrowserRoutes> in Main.tsx

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Routerr/Home";
// import About from "./Routerr/about";
// import Jobs from './Routerr/jobs';
// import {fetchdata} from './Routerr/jobs';
// import { fetchdetails } from "./Routerr/Details";
// import Details from './Routerr/Details';
// const route=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/about",
//     element:<About/>  
//   },
//   {
//     path:"/jobs",
//     element:<Jobs/>,
//     loader:fetchdata
//     // Here the control Flow is  the first we will hit the path and loader will be called and loader will return the data then 
//     // jobs fucntion will recive the data and we are rendering  that file 
//   } ,
//   {
//     path:"/detail/:id",
//     element:<Details/>,
//     loader:fetchdetails
//   }
// ])
// function App(){
//   return(
//     <>
//     <div>Create BrowserRoute</div>
//     <RouterProvider router={route}/>
//     </>
//   )
// }
// export default App





// //fetch
// import Posts from "./Fetch/Posts";
// const App=()=>{
//   return(
//     <>
//     <Posts/>
//     </>
//   )
// }
// export default App;


// //Context
// import Dashboard from './contextt/dashbord';
// import UserDashboard from './contextt/UserDashboard'
// const App=()=>{
//   return(
//     <>
//     <UserDashboard/>
//     {/* <Dashboard/> */}
//     </>
//   )
// }
// export default App;



//Private Routing
// import { NavLink, Route, Routes } from "react-router-dom";
// import Home from "./Routerr/Home";
// import Loginscrean from "./PrivateRoute/Loginscrean";
// import About from "./Routerr/about";
// import Contact from "./Routerr/Contact";
// import { Logincontext } from "./PrivateRoute/Logincontext";
// import { useState } from "react";
// import Privateroute from "./PrivateRoute/Privateroute";

// const App=()=>{
//   const [name,setName]=useState<string|undefined>(undefined)
//   return(
//     <>
//     Username:{name}
//    <ul className="flex grid-4">
//     <li><NavLink to="/">Home</NavLink></li>
//     <li><NavLink to="/login">Login</NavLink></li>
//     <li><NavLink to="/about">About</NavLink></li>
//     <li><NavLink to="/contact">Contact</NavLink></li>
//    </ul>
//    <Logincontext.Provider value={{name,setName}}>
//    <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/login" element={<Loginscrean/>}/>
//     {/* Making this both routes for Admin  means  private rotuign */} 
//   <Route path="/" element={<Privateroute/>}> 
//   <Route path="about" element={<About/>}/>
//   <Route path="contact" element={<Contact/>}/>
//   </Route>
//    </Routes>
//    </Logincontext.Provider>
//     </>
//   )
// }
// export default App;









// import results from "./data.json";

// function App() {
//   //variable
//   // let data:string;
//   // data="Demo";
//   let data = "Demo";
//   //array
//   //let arrData=["First","Second",23] //This is first Type 
//   let arrData: string[] = ["First", "Second", "Third"];
//   //object

//   //let obj:{name:string,age:number}={name:"First",age:30}
//   //inline type

//   //THis is another type
//   type objectype = {
//     name: string,
//     age: number;
//   }
  
//   let obj: objectype = { name: "First", age: 20 };

//   //array of objects
//   let arrObj: objectype[] =results;


//   // obj.name="";
//   // obj.age=23;

//   return (
//     <>
//       <div >      
//   <div className="flex w-full bg-red-600 ">
//    {
//     arrData.map((item,index) => {
//       return (
//         <a 
//           key={index}  href={`#${item.toLowerCase()}`} 
//           className='text-white px-4 py-2 cursor-pointer hover:underline'
//         >
//           {item}
//         </a>
//       );
//     })
//   }
//   </div>

//         {
//           arrObj.map((item) => {
//             return <p>{item.name} - {item.age}</p>
//           })
//         }
//       </div>
//       Welcome to {data} - {obj.name} {obj.age}
//     </>

//   )
// }

// export default App





//Tasks
// import Task from './Taskss/Task'
// const App=()=>{
//   return(
//     <>
//      <Task/>
//     </>
//   )
// }
// export default App;