import { useParams } from "react-router-dom";

const about=()=>{
    const parms=useParams(); // this is an object 
    const ans=parms.city;
    return(
        <>
        <div>Welcome To about Page</div>
        <p>Recived data:{ans}</p>
        </>
    )
}
export default about;