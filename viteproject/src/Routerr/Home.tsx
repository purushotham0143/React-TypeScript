import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();

    const clickhander=()=>{
        navigate("/Login");
    }
    return(
        <>
        <div>Welcome To Home Page</div>
        <nav>
            <ul>
                {/* <li><a href="./about.html">Home</a></li>  if you use this a tag page all page will re rendered and refresh the Browser so we use link to tag */}

                {/* <li><NavLink to="/Home">Home</NavLink></li>   // if we use this we will get two extra componont class=active and data-discover=true in element in the console throught this we can apply styling   .active*/}

                <li><NavLink to="/">Home</NavLink></li>   
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                {/* THis method is to navigate the page Programmitacally  */}
                {/* <button onClick={clickhander}>Login1</button>      */}
                {/* <button onClick={()=>navigate("/Login")}>Login2</button>     */}

                <button onClick={()=>navigate("/Login",{state:{data:10}})}>Login2</button> 
               {/* Here state is an object in that object we have another object and THis is also called Dynamic Routing this is one type  */}
            </ul>
        </nav>
        </>
    )
}
export default Home;