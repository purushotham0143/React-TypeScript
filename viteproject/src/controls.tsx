import { ChangeEvent } from "react";

const Controls=()=>{

    let textData="";
    const changeHandler=(e:ChangeEvent)=>{

        let target=e.target as HTMLInputElement;
        textData=target.value;
        console.log(textData);
    }

    // const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    //     let target=e.target
    //         textData=target.value;
    //         console.log(textData);
    // }
    const clickHandler=()=>{
        alert(textData);
    }

    return (
        <>
        <input    className="bg-amber-600 border-4 border-black" type="text"  onChange={changeHandler}/>
        <button onClick={clickHandler}>Print</button>
        </>
    )
}
export default Controls