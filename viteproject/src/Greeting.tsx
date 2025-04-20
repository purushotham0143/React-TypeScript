import React from "react"


// //This is class ompound in the react

// //class component itself extends a react component  because class dus  not have a return method render methid well return  
//   class Student extends React.Component
// {
//  render(){
//     return(
//     <>
//     class Component
//     </>
//     )
//  }
// }
// export default Student


type GreetingProps={
    name:string
}

//class  is a Template based  means <> this  and also We dont  want to  define the probs probs is Fredefined and just we have to Defined the type of the probs
//class itself call's the component Constructor and it will asign  just we have to use the this  key word in  the class to point the current 
class Greeting extends React.Component<GreetingProps>
{
    clickHandler=()=>{
        alert("clicked");
    }
    render()
    {
        return (
            <>
            Class {this.props.name}
            <button  onClick={this.clickHandler}>Call me</button>
            </>
        )
    }

}
export default Greeting;