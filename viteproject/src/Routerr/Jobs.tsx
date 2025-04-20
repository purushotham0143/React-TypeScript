import React from 'react'
import { NavLink } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
// import jobsdata from './jobs.json'
//Here to get the all the data in the job.json we can import it and Triverse all the data in this one jobsdata


export type jobstype={
    id:number,
    title:string,
    dis:string,
    package:string 
}
const Jobs=()=>{
    // const data=useLoaderData();

    //Here we have to crate a type because coming data is user defined
    const data = useLoaderData() as jobstype[];  
  return(
    <>
    <div>Jobs Data</div>
    {/* {data}   //this is only for normal data */}
    <div className='container'>
        <div className='grid grid-cols-4 gap-4'>
            {
                data.map((ele)=>{
                    return(
                        <div className='bg-gray-100'>
                           <NavLink to={`/detail/${ele.id}`}> <div>{ele.title}</div></NavLink>
                           {/* here if i click on the jobs title i have to  get remaining job details  we use Here dynamic Routing  
                           we are using javascript string interpollution menas backticks  ele.id is a varible and it will subitute into a string 
                           here we are not sending the data using state because of the loader cant reciver only varible can recive the state */}
                            <div>{ele.dis}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}
export default Jobs;
export const fetchdata=async()=>{
    // return "Hi";
    //when ever we are Fetching something the browser will check in your site that is public you have to put the file in the public 

    //Here we should not write this because this run in the backround 
    //the loader is coming to Take somthing  so we use wait  beacause we are saying that 
    //wait results is preapared take it
//     fetch('/jobs.json').then((res)=>{
//         return res.json(); 
//     }).then((data)=>{console.log(data)})  


const res=await fetch("/jobs.json");
const ouput=await res.json();
return ouput;
}

