// class component Life cycle
//Here first constructure will be called
// 1.componentDidMount() when you create the component it will load or render for first time
//2. componentDidUpdate()  when you will update the  if you update anything  in the component 
//3.componentWillUnmount()  when you will remove something in the component  then that is unmount 



// import React, { Component } from 'react';

// interface LifecycleProps {
//   initialCount?: number;
// }

// interface LifecycleState {
//   count: number;
// }

// class LifecycleComponent extends Component<LifecycleProps, LifecycleState> {
//   constructor(props: LifecycleProps) {
//     super(props);
//     this.state = { count: props.initialCount || 0 };
//     console.log("1. Constructor called");
//   }

//   static getDerivedStateFromProps(nextProps: LifecycleProps, prevState: LifecycleState) {
//     console.log("2. getDerivedStateFromProps called");
//     return null;
//   }

//   componentDidMount(): void {
//     console.log("4. componentDidMount called");
//   }

//   shouldComponentUpdate(nextProps: LifecycleProps, nextState: LifecycleState): boolean {
//     console.log("5. shouldComponentUpdate called");
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps: LifecycleProps, prevState: LifecycleState): any {
//     console.log("6. getSnapshotBeforeUpdate called");
//     return null;
//   }

//   componentDidUpdate(prevProps: LifecycleProps, prevState: LifecycleState, snapshot?: any): void {
//     console.log("7. componentDidUpdate called");
//   }

//   componentWillUnmount(): void {
//     console.log("8. componentWillUnmount called");
//   }

//   handleClick = (): void => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     console.log("3. Render called");
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }

// export default LifecycleComponent;


//******** Explanation */
// The reason render is called before componentDidMount is:

// React needs to create and display the component first (render).

// Only after the component is visible on the screen, React can perform actions in componentDidMount.

// This ensures side effects (e.g., fetching data) don’t delay the initial render.








import React from "react";
type CState={
    count:number
}
type CProps={

}
class CTimer extends React.Component<CProps,CState>
{
    state={count:1};

//    constructor(props:CProps)//default
//    {
//     super(props);
//     setInterval(this.timerTick,1000);

//    }
componentDidMount(): void {
    setInterval(this.timerTick,1000);
    
}
   timerTick=()=>{
        this.setState({count:this.state.count+1});


   }
    render()
    {
        return(
            <>
                {this.state.count}
            </>
        )
    }

}
export default CTimer;

//regular -> create a this ->caller
//arrow no this 

// function test()
// {
//     funciton dummy()
//     {

//     }
//     dummy();  //Her the Dummy function calling one is test not an object
// }