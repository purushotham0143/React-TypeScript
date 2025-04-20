type ChildProps={
    data:string;
    code:(args:string)=>void;  
    // Here in the code function we recive  the  argument as string beacuse state will recive parameter as string 
}
const Child=(props:ChildProps)=>{
    const clickHandler=()=>{
        //props.data="Bye";
        props.code("Bye");
        
    }
    return (
        <>
        <div>Child {props.data}</div>
        <button onClick={clickHandler}>Change</button>
        </>
    )
}
export default Child;