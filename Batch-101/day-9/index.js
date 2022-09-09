
// // // Objects


// // // let obj={
// //     name:"ABC",
// //     address:"TEst Stree",
// //     "pin-code":"1232423",
// // }


// // obj.state="Madhya Pradesh"

// // // console.log(obj.address)
// // // console.log(obj.pin-code) // not valid syntx in javascript

console.log(obj["pin-code"]) // not valid syntx in javascript


const LeftSide=Object.keys(obj);
const RightHandSide= Object.values(obj); // it return an array


// // console.log(LeftSide)
// // console.log(RightHandSide);


// // //  Arrow function
// // // let , const , var
// // // scope 
// // // available in Javscript



// // // Javscript me functions behave link a objects
// // const myFunction=(a,b,c,d)=>{

// //     false;dlfj
// //     adfasdklfjasdf
// // return a+b+c+d
// // }

const myFunction4=(a)=> a*a;

let mySecondObject={}
// //  // empty initialization of object

// //  mySecondObject.cgpa=10





// //  console.log(mySecondObject)



// // // const name='siddharth'
// // // name='something'









// // // Prmoise
// // // 
// // // Accept or Reject Case 

// // // API Call , to delete a user
// // //
// // // argument function

// // const myPromise= new Promise((resolve,reject)=>{


// //     // resolsve 
// //     // string
// // // API 
// // // DB CONNECTION , DATA PULL




// //     resolve("SUCCESS")


// //     reject(new Error('We have not resolved '))
// //     // return 
// //     // resolve
// //     // THEN BLOCK


// //     // reject
// //     // Error catch block 
// // })


// // myPromise
// // .then(response=>{
// // console.log("RESPONSE",response);





// // })
// // .catch(err=>{
// //     console.log(err);
// // })
// // .finally(f=>{
// //     console.log("FINAALY IT HAS NOTING TO DO WITH TRY/CATCH")
// // })




// // try{

// // // code 

// // // 11 line fail

// // // 20lines
// // // wejsdf


// // }

// // catch(err){

// // // 

// // console.log("SOMETHIGN WNE")
    
// // }


// // // If your code fail/ successfully excectued inside try block




// // //  Javascript is syncronous language



// // // 20lines
// // // 15 line it takes some more time



// // // API CALL // 
// // // data handling 




// // // SET TIMOUT 
// // setTimeout(()=>{
// // console.log("CODE EXCECTUED")
// // },5000)
// // // after 5 second exceture this code

// // setInterval(()=>{
// //     console.log("EVERY ONE SECOND")
// // },1000)
// // millise 1sec = 1000ms


// // function
// // time in millisecond



// // DATA STRUCTURE 

// // MAP , SET

// // MAP , KEY VALUE O(1) 
// // Uniqe values ko store krta hai

// // creating a map

// //  KEY | Value
// // APPLE  true
// // MANGO true

// let myMap=new Map()
// // efficient 
// // set, delete

// myMap.set('1',true);
// myMap.set('2',true);
// // undefined

// console.log(myMap.get('2'))


// myMap.delete('')
// console.log(myMap)


// //  set unique value

// // { bus,train,3,4,7,8 }


// let mySet=new Set();
// mySet.add('bus')
// mySet.add('train')

// console.log(mySet)









