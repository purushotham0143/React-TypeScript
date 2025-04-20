import React from "react";

type ButtonProps={
    value:string,
    click:(e:React.MouseEvent)=>void
}
const Button=(props:ButtonProps)=>{
    const clickHandler=(e:React.MouseEvent,id:number)=>{

        alert("Button clicked");

   }
    return (
        <>
        <button className="bg-red-600 p-2 text-white gap-2" onClick={props.click}>{props.value}</button>
        < button className="bg-red-600 p-2 text-white gap-2" onClick={(e:React.MouseEvent)=>{clickHandler(e,1)}}/>  /
        {/* /*Here we  creating  one fucntin Directly and passing Second Paramter/* */}
        </>
    )
}
export default Button;