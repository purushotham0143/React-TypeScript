import { useLocation } from "react-router-dom";

const Login=()=>{
    //To  collect that data from the Dynamic Routing we one Hook called  useLocation();
    const location=useLocation();
    const ans=location.state.data;
return(
    <>
    <div>Hello welcome to the Login Page</div>
    <p>data Recived:{ans}</p>
    </>
)
}
export default Login