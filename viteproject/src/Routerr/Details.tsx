import React from 'react'
import { LoaderFunctionArgs, NavLink } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { jobstype } from './jobs';


const Details=()=>{
    const data = useLoaderData() as jobstype;  
    //this is for only single object not an array
  return(
    <>
    <div>Remaing job details</div>
    <div className='container'>
        <div className='grid grid-cols-4 gap-4'>
        <div>{data.id}</div>
            <div>{data.title}</div>
            <div>{data.dis}</div>
            <div>{data.package}</div>
        </div>
    </div>
    </>
  )
}
export default Details;
export const fetchdetails=async({params}:LoaderFunctionArgs)=>{
    //here we  are reciving one parameter in loader /:id that will recive in 
    // Loaderfucntionargs  this had many object but we will use parms object we are distructuring the parms
    // we will get string convert into the number
  const id=Number(params.id); 
const res=await fetch("/jobs.json");
const output:jobstype[]=await res.json();
const job = output.find((ele) => ele.id === id);
console.log(job);
return job;
}

