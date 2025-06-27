import React, { useRef } from 'react'
import { Ref } from 'react';
function Task() {
  let arr=[1,2,3,4,5,6];
  let len=arr.length;
  const inputref = useRef<HTMLInputElement>(null);
 const clickhand=()=>{
     let mid=Math.floor(len/2);
     if (inputref.current) {
       inputref.current.value = arr[mid].toString();
     }
}
  return (
    <>
    <input type="textbox"  ref={inputref} className='border' />
     <button onClick={clickhand}>ok</button>
    </>
  )
}

export default Task
