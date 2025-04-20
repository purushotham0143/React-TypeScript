// // fetch is async process it will go under the background process  so we use  await we use to handle  priomise  using  then
// //if you write direcltly code in the functional componenti it will render for each compount  and to reduce that we use the useEffect 
// //in the Dependecy array we say that How many time it has to call in useEffect if we not giving any thing there it will  call only once 

import { useEffect, useRef, useState } from "react"
import { fetchdata } from "../Routerr/jobs";
interface posttype{
    id:number,
    title:string,
    body:string 
}

const Posts=()=>{
    //To  render the data in the ui we have to use the State 
    const [data,setData]=useState<posttype[]>([])
    //manam Data vachi Dhaka manam  Loading ani chupiyali ant edi
    const [IsLoading,setLoading]=useState(true);
    //if you get any error during the data fetch then display the Error also 
    const [error,setError]=useState("");
    //pageing
    const [page,setPage]=useState(0);
    //to handle the Multiple clickings of the page button 
    let  abortRef=useRef<AbortController|null>(null);

    useEffect(()=>{ 
       const fetchdata=()=>{
        //to handle the Multiple clicks and ? for optional  if ywe use this it will  run only one time  in background
        // Abort previous request if it exists
        if (abortRef.current) {
            abortRef.current.abort()
        }
          // Create new AbortController for this request
          const controller = new AbortController()
          abortRef.current = controller

        setLoading(true);
        setError(" ");  // Reset error on new fetch
        fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`,{signal:controller.signal}).then((res)=>{
            return res.json(); // it will  create one promise 
        }).then((data)=>{
            console.log(data);
            //whenever we Got the resonse then we set i got my my data disply it i dont want loding
            setLoading(false);
            setData(data);
        }).catch((e:any)=>{
            setLoading(false)
        setError(e.message); //because e is an object
        })
       }
    //    fetchdata();
       setTimeout(fetchdata,2000);
       //Here we use this to fethc  my data after the 2000 milliseconds
    },[page])

    //we are using before returing the table 
    if(IsLoading)
        return <div>Loading....</div>
    if(error!="")
        return <div>{error}</div>
    return(
        <>
        <button onClick={()=>{setPage(page+1)}}>Page{page}</button>
         <table className="border">
            {
                data.map((ele)=>{
                  return(
                    <>
                     <div>
                    <tr><td>{ele.body}</td></tr>
                   </div></>
                  )
                })
            }
         </table>
        </>
    )
}
export default Posts;


// //step by step what we have done and this topic is AJX using fetch statrement  
// //1.fetch data
// //2.display loading untill
// //3.handle the error while uccring fetching
// //4.pageing like of you write int last fetch url like 1,2 like this you have to get that data
// //i.Handing page error if i click  page at a time muilitpule clicks on the page button  then remove or 
// //  false the  previous request and then take present page   using useRef





// import { useEffect, useRef, useState } from "react";

// interface PostType {
//     id: number;
//     title: string;
//     body: string;
// }

// const Posts = () => {
//     const [data, setData] = useState<PostType[]>([]);
//     const [isLoading, setLoading] = useState(true);
//     const [error, setError] = useState("");
//     const [page, setPage] = useState(1); // Start from page 1
//     const abortRef = useRef<AbortController | null>(null);

//     useEffect(() => {
//         const fetchData = () => {
//             // Abort previous request if it exists
//             if (abortRef.current) {
//                 abortRef.current.abort();
//             }

//             const controller = new AbortController();
//             abortRef.current = controller;

//             setLoading(true);
//             setError(""); // Reset error on new fetch

//             fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`, {signal: controller.signal,})
//                 .then((res) => {
//                     if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
//                     return res.json();
//                 })
//                 .then((data) => {
//                     setData(data);
//                     setLoading(false);
//                 })
//                 .catch((e) => {
//                     // Ignore AbortError (intentional cancellation)
//                     if (e.name !== "AbortError") {
//                         setError(e.message);
//                         setLoading(false);
//                     }
//                 });
//         };

//         const timer = setTimeout(fetchData, 2000);

//         // Cleanup: Clear timeout & abort pending request
//         return () => {
//             clearTimeout(timer);
//             if (abortRef.current) {
//                 abortRef.current.abort();
//             }
//         };
//     }, [page]);

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div>
//             <button onClick={() => setPage((prev) => prev + 1)}>Page {page}</button>
//             <table className="border">
//                 <tbody>
//                     {data.map((post) => (
//                         <tr key={post.id}>
//                             <td>{post.title}</td>
//                             <td>{post.body}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Posts;