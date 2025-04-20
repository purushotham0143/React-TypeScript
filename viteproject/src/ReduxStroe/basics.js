//Basics for redux store
// this is all  about functional programing 
//1.functions are the first class citizen
// entity means string,number,varible,function we talking about the functions her 
// every entity   ->  we can 1.assign to varible,2.return ,3.argument, who performs this baic operatiopns called as a first  class functions


// 1.
// function sayHello(){
//     console.log("hellop")
// }
// const fn=sayHello;
// fn();


// 2. passing argument as another function
// function sayHello(){
//     console.log("hellop")
//  }
// function greet(fn){
//   console.log(fn())
// }
// greet(sayHello);

// 3.anonymous function //Return another fucntion in a fucntion
// function sayHello(){  // this will return a fucntion stored in  f  now f is anonymous function 
//     return function(){
//         return "Hello";
//     }
//  }
// const f=sayHello();
// console.log(f());

//if a function is doing this three things then it called as first  class function


//Higher order function:-function which recives  a fucntion  as paramters and also and return  a function
//Pure functions
function getNumber(number){ //  this is not a pure function because it is giving the every time different number
return number*Math.random();
}
console.log(getNumber(10));


function getData(num) {  // this can be called pure function
//Pure function menas answer ki kavalasinavi anni parameter lo vundali  ansswer should 
//always depends on the parameters 
    return num*2;
}
console.log(getData(10))

let minage=20;
function isElgible(age,minage){ //  this is also not a pure function because output is depends on the global varible
return age>minage
}
console.log(isElgible(20));


function isdPure(age,minage){ //  this is now pure function
return age>minage
}
console.log(isdPure(20,10));


//nesting functions
// let str=" javascript  ";

// const trim=str=>str.trim();
// const toLower=str=>str.toLowerCase();
// const wrap=str=>`<div>${str}</div>`;
// const output=wrap(toLower(trim(str)));
// console.log(output);

//To make the above work simple we one libaray called loasash
//install it lodash
// import compose from "lodash/fp/compose.js";  // this is used for compose
// import pipe from "lodash/fp/pipe.js";    // this is used for compose in the sequence 

// let str = " javascript  ";

// // Use unique function names
// const trimString = s => s.trim();
// const toLowerCase = s => s.toLowerCase();
// const wrapInDiv = s => `<div>${s}</div>`;

// // const fn = compose(wrapInDiv, toLowerCase, trimString);  // right-left it will work from the right to left first trimString is excuted the..;
// const fn = pipe(trimString,wrapInDiv,toLowerCase);  // left-right
// const output = fn(str);

// console.log(output);  // <div>javascript</div>



//currring:- converts Multiple arguments fucntion into single argument function 

function add(a,b){ // normal
return a+b;
}
console.log(add(10,20));

function curr(a){ //curring
    return function(b){
        return a+b;
    }
    }
    let f=curr(5);
    let result=f(10);
    console.log(result);



//what is the Benifit of this we will seee
// import pipe from "lodash/fp/pipe.js";  
// let str=" JAVASCRIPT  "
// const trim = s => s.trim();
// const toLowerCase = s => s.toLowerCase();
// const wrap = (element, str ) => `<${element}>${str}</${element}>`;
// // const fn = compose(wrapInDiv, toLowerCase, trimString);  // right-left it will work from the right to left first trimString is excuted the..;
// const fnn = pipe(trim,toLowerCase,wrap);  // left-right
// const outputt = fnn(str);

// console.log(outputt);  // <javascript>undefined</javascript>
 

//corrected using curring
// import pipe from "lodash/fp/pipe.js";  
// let str=" JAVASCRIPT  "
// const trim = s => s.trim();
// const toLowerCase = s => s.toLowerCase();
// function wrap(element){
//     return function(str){
//         return `<${element}>${str}</${element}>`
//     }
// }
// const fnn = pipe(trim,toLowerCase,wrap("div"));  // left-right
// const outputt = fnn(str);
// console.log(outputt);  // <div>javascript</div>
 

//objects
// let person={"title":"First Name"};
// let obj=person; // obj->reference to person ,calledd shallow copy
// obj.title="New Name";
// console.log(obj,person);

//Deep Copy
// 1.for each keys ->items 
// 2.Spread operator
// Arrays->Spread values  
// object -> spread keys 
// let obj={...person};  //Deep copy of a person object and we are creating another object using one objet
// obj.title="New Title"
// console.log(obj,person)


// but we have one problem in Deep copy untill where we cant use 
let person={
    "title":"ABC",
    age:10,
    address:{   
        city:"XYZ"
    }
}
console.log(person)
// let obj={...person}
// obj.title="OBJ"
// console.log(obj,person)
// obj.address.city="A" // Deep copy is only for top Elemets if you change
// //Her eaddress both the new obj and person object will change the coty values
// console.log(obj,person)

//To correcting this problem
// let obj={  //Deep copy 
//     ...person,
//      address:{   //if two same keys are defined in the obj second one will used
//         ...person.address
//      }
// }
// obj.address.city="A" // this will change only for obj not person
// console.log(obj)


// We are  installing 2 libraries for this 
// npm install immutable

//String is Immutable in react and  we cac't direclty change the string and 
//alter we change we  will put in another string new string will be formed and then cchanged in new string not in main string
// let str="Data";
// let str1=str.toLowerCase();
// console.log(str1,str);

//we will crate one obj which is immutable
//Map->immutable //map is used to make immutable .

// let book={"titel":"First Book",isPublished:false};
// function publishedBook(book){
// book.isPublished=true;
// }
// console.log(book);
// publishedBook(book);
// console.log(book);


//Here we are changeing original code it  will not change because immmutable
// import {Map} from 'immutable'
// //if we use this it will not change  in the original obj it will change in new obj and created and returned 
// let book=Map({"title":"First Book",isPublished:false}); //it is not an object it is a map 
// //Map ->map is an API  ->Set oF functions
// //1.get,set,tojs
// console.log(book.get("title")); // to get the value
// book.set("isPublished",true);  //Here you will get a new obj 
// console.log(book.toJS()); //it will convertsin to js



//Here it changed becuase we are taken newans
// import {Map} from 'immutable'
// let book=Map({"title":"First Book",isPublished:false}); 
// console.log(book.get("title")); 
// let newans=book.set("isPublished",true); 
// console.log(newans.toJS()); 

// import {produce} from "immer";
// //Here it will create an newobj and it will change by the way automitaclly
// // draftbook is the deepy copy of the book 
// let book={"title":"First Book",isPublished:false}; 
// let nbook=produce(book,(draftbook)=>{
//     draftbook.isPublished=true
//     ;
// }) 
// console.log(nbook);

import {produce} from "immer";
let book={"title":"First Book",isPublished:false}; 
function publishbook(){
    const nbook=produce(book,(draftcopy)=>{
        draftcopy.isPublished=true;
    })
    return nbook;
}
const nbook=publishbook(book);
console.log(nbook,book);