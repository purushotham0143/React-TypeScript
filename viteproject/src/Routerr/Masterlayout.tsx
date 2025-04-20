import { Outlet } from "react-router-dom";

const Masterlayout=()=>{
return(
    <>
    <div>This is a master layout</div>
    <div>
        <Outlet/>  
        {/* If we wont use the Outlet nested will not work here to render the clid Routes  */}
    </div>
    </>
)
}
export default Masterlayout;