// //fucntionsal compound 
// function Gree(){
// return(
//     <>
//     <div>wecome to Gree</div>
//     </>
// )
// };
// export default Gree;

// const Greet=()=>{
//     return (
//         <>Greet Component</>
//     )
// }
// export default Greet;

 //This is Functional componunt
// const Greet:React.FC=()=>{
//     return (
//         <>
//         Greet</>
//     )
// }
// export default Greet;


// interface Props {
  
// }
// const Component: React.FC<Props> = ({  }) => {
//   return (
//     <></>
//   );
// };

//export default Component;


// const Greet=()=>{
//     return (
//         <>
//         <div>THis is the Second Type</div>
//         </>
//     )
// };
// export default Greet;




//int functional probs are Passed as Key,value pair in the json Data
type ObjectType={
    name:string,age:number;
}
type GreetProps={
    name?:string,
    years?:number;
    //data?:{name:string,age:number}[];
    data?:ObjectType[];

}
const Greet=(props:GreetProps)=>{
    return (
        <>
        <div>Welcome to {props.name}</div></>
    )
}
export default Greet;

