//Redux is a state management library Redux has main three Pillars 
//when we make call to the  Actions will call the store and store will send the (action,existingstate) to the Reducer
// 1.Actions - Actions are Events  We will dispatch the evetns  to strore 
// 2.Strore  - (existing state) // this will be passed to reducer
// 3.Reducer -(existing state ,action) we have in the  Reducer 
// reducer is an event which Hnadels the events  using the Existing state and the Action
// the main task is to retuen the Updated state ,and that is stored in the store 


//Why we use Redux :-we Normaly use Context to store the data but  we have one problem 
//  it is for simple data only 
// we use Reducer for complex data
// In redux we have one  plagin called persist in Context when we Refresh the state is also Refreshed 
// but Here in Redux if we use this plugin  it will store the data in the local storage  state can be changed 
// Avoids prop drilling — No need to pass props from parent to child to grandchild.
// Centralized state — All state is in one place (the store).
//Reducer will  returne always updated state
//Steps to Perform the Redux
// 1.Design a store
// 2.Define actions -what actions are Requiried in the store
// 3.Reducer
// 4.Setup store

// 1. Desigon a Store (obj)  and Define the structure also
//Bug tracking/Todo
// [  // Array of object
//     {
//         id:number,
//         descprtion:string,
//         resolved:boolen
//     }
// ]
// 1 Reducer for this single 
//Handle the 2 reducer 

// We are working on bug tracking system  so we want

// 2.Add_bug,Resolve _bug,Delete_Bug (Action defined)
// action is an object 
//reduc is a flux store 
//actions will raise an event then to store all this will go the reducer in a single pipe
// to create this pipe we have a log  means what actions are performed 
//flux structer
// {
//     type:"bugAdded", // this means Action
//     payload:{
//    description:"First Bug"
//     }
// }
// {
//     type:"bugResolved", // this means Action
//     payload:{
//    id:"1" // why we give Here id means we just want resolve the that id 
//     }
// }
// {
//     type:"bugDelete", // this means Action
//     payload:{
//    id:"4" // why we give Here id means we just want delete the that id 
//     }
// }

//3. we will create Reducer
//function -> (state,action) action is an obj,and state  as parameter
//return update  state-> that store  directly in  the store

// 4.setup the store

let lastid=1;
//state is initally empty
function BugReducer(state=[],action){
    if(action.type=="bugAdded"){
        const updatestate = [...state];
        updatestate.push({
            id:lastid++,
            description:action.payload.description,
            resolved:false
        })

        return updatestate;
    }
      if(action.type=="bugResolved"){
        //so we  have already updated state so we take that 
        //map will return new object
       const  updatestate=state.map((item)=>{
            if(item.id==action.payload.id)
                item.resolved=true;
            return item;
        })

        return updatestate;
    }
    if(action.type=="bugDelete"){
        //so we  have already updated state so we take that 
      const   updatestate=state.filter((item)=>{
        return item.id!==action.payload.id
    })

        return updatestate;
    }
    return state //  if no action it will return the current action
}

//last step setup the store ->so we have to add the library
// npm install redux 
import { createStore } from "redux";
const store=createStore(BugReducer);  // store created 
console.log(store.getState());  // inital state
store.dispatch({  // Raise an event and it  call the store and store is attached to bugReducer 
    type: "bugAdded",
    payload: {
        description: "First Bug"
    }
});
// Add How many you want
store.dispatch({  // Raise an event and it  call the store and store is attached to bugReducer 
    type: "bugAdded",
    payload: {
        description: "Second Bug"
    }
});
//Bug resolved
store.dispatch({  // Raise an event and it  call the store and store is attached to bugReducer 
    type: "bugResolved",
    payload: {
        id:2
    }
});
store.dispatch({
    type: "bugDelete",
    payload: {
        id: 1
    }
});
console.log(store.getState());

//If you want to Take the Values from the ui and from the user dinamically we create a function
//create a button and handle this fucntions //we render this button in the UI 
const addBug=description=>{
    store.dispatch({
        type:"bugAdded",
        payload:{
            description:description
        }
    })
}
const resolveBug=id=>{
    store.dispatch({
        type:"bugResolved",
        payload:{
            id:id
        }
    })
}
const bugdelete=id=>{
    store.dispatch({
        type:"bugDelete",
        payload:{
            id:id
        }
    })
}
// in context when we refresh data in the state is Done and 
//  after the Refresh once we hit the local storage  we have to write this code but we have presists in redux 

// Here in redux  we presists  to kepp the data in llocalstoprage  when we refresh the existing store
// it will maintain 



//Shoping
// {
//     carts:[
//         {}
//     ]
//     currentUser:{}
//     category:[]
// }

//Here we will call the slices for keys and here above 3 slices, and we requires 3 reducers


 