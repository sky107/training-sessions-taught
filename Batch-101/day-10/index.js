// // // // // == , ===
// // var myVariable
// // // // let a='12'; // string , collection of characteres
// // // // let b=12; // number

// // // // // if(/* condition */    a==b ){

// // // // // }else{

// // // // // }
// // // // console.log(a==b);


// // // // //  LAnguage , C , C++ , Python , Java , Scala, Go

// // // // // Compiler 

// // // // // Particular Language -> COmpiler -> Machine Language output

// // // // // Browser
// // // // // chrome -> V8 ( C++ )
// // // // // , firefox  -> SpiderMonkey
// // // // // , edge/ Internet Explorer -> Chakra , Microsoft


// // // // // inbuild Javscript Enginer / Compiler

// // // // // Machine V8 X
// // // // // Browser Chrom v8 , js compile nhi


// // // // // Compiler JS , for local machine -> NodeJS
// // // // // C++ , gcc Compiler

// // // // // hoisting

// // // // // var , const , let

// // // // let myVariable;// Declaration 

// // // // myVariable=123;
// // // // // Initialzation

// // // // // Use
// // // // console.log(myVariable);

// // // // // console.log(myVariable);


// // // let a=123; // Variable , has globally window object attach kr deta hai

// // // a=999;
// // // console.log(a);

// // // // var -> ES5  2009
// // // // let const -> recently added



// // console.log(myVariable);

// // // by default , 
// // // var testVariable;
// // // testVariable=123
// // // console.log(testVariable)




// // myVariable=12;

// // console.log(myVariable);


// // variables


// // let testarray=[1,2,3,4,5,6];

// // console.log(testarray[3]);

// console.log(getSurname("Siddharth Yadav"));
// // Javscript wried , functions , variable automatically background v8 handle
// function getSurname(name){

//     // split function array , [1]
//     // console.log(name.split(' '));
//     return name.split(' ')[1];
// }


// // undefined
// let myVariable;
// myVariable=null; // something is empty


// // synchronouse language


// // multiple promise call 1 call 

// //  userData,   
// // stats , covi19 cases
// // 

// const myPromise1=new Promise((resolve,reject)=>{
//     // DATABADE FETCH , time lag


    
//         // return userProfile Data

//     // logic 
        
// // delay 
//     setTimeout(()=>{
//         resolve(1)
//     },5000)


// });

// const myPromise2=new Promise((resolve,reject)=>{
// // return your activiites
//             //logic2 

//             setTimeout(()=>{
//                 resolve("Promise 2 Resolved")
//             },1000)
//             // reject(new Error("Somethign went wrong"))
// });



// Promise.all([ myPromise1,myPromise2 ])
// .then(response=>{
//     console.log("ResPONSE",response);
//     // array of resolved promise 
//     // json , text 


//     // DOM Maniuplate 
//     // 
// })
// .catch(err=>{
//     console.log("ERR",err);
// })

// features that are introudec in ES6

const  obj={
    name:"Siddharth",
    cgpa:10
}

// const {name}=obj; // Object , Destructure and store in named 
// const {cgpa,name}=obj;


// console.log(name,cgpa);

// one greatre than

console.log(Math.floor(1.3))

// 
// array 
let testArray=[1,23,24,23,2,32,32,3,23];
// map , filter, reduce
// function
  let newFilteredArray =testArray.filter(function(args){


    
    // either true/false
    console.log(args);
    if(args%2==0){
        return true;  // wheather to include in an array
    }else
    return false;
})
console.log(newFilteredArray);


// map functions

testArray.map((value, index, fullArray)=>{
    console.log(`VALUE at ${index}`,value);
    // console.log(index); // 0 based indexing 
    // console.log(fullArray); // full array 
})