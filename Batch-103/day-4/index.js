// // Basic Programmming : Javscript, weakly type language , client side : service side
// // Frontend + Backend
// // 
// // Java,Python , golang (Goroutines) -> (Multhreading) X

// // Java , Python



// // Javscript : -> 

// console.log("Hello world")

// // Variables , , Loops , Switch , 
// // Data , process 

// // store , variables

// // Datatypes
// //  String , number , boolean, Objects, Array , ...
// // 'siddharth'
// '#'
// " "
// 'a'
let myName  =  "siddharth";
let myCgpa= 8;
// console.log(myCgpa);
let isAdmin=false; /* true/false */
let studentProfile= {
    // collection of hetrogenous/homogneout
    name:"Raja",
    age:50,
    gender:"Male"
}
// // dot notaiton
console.log(studentProfile.age)

// // traverse easily
// let myArray= [  studentProfile,5,3,4,5,6   ];
//                     // 0 , 1 , 2, 3, 4,5, 6
// // o based indexig

// myArray.push("HELLO SKY")
// myArray.push(4)
// myArray.push(54)
// myArray.push(345435)

// // pop , last elment remove
// myArray.pop();
// myArray.pop();
// myArray.pop();
// myArray.pop();



// console.log(myArray);
// console.log(myArray[0])

// // data handling , 
// console.log(typeof isAdmin);

//loops

// boolean isAdmin=true;
// char a[100];
// int a=12;

// for
    //initalization ,// Check Condition,   something you have to perform


    //  i=0
    // one time
// for (let i=0;  i<100;    i++){
//     //  ----------->
//                 // |
//                 // |
//                 // V
//     console.log(i);
//     console.log("Hasdfasdf")
//     console.log("sdfadsf")
//     console.log("asdfasd")
//     console.log("Hasdfasdf")
// }

// if else

if (true){
    console.log("Hasdfasdf")
    console.log("sdfadsf")
    console.log("asdfasd")
    console.log("Hasdfasdf")
    // alert("HI")
//    let name= prompt("Enter your name");
//    console.log(name);


// 

}else if(false){
    console.log("Something went wrong")
}else if(false){

}else if(false){


}else{
    console.log("NOHTING FOUND")
}
//

// Ternaray Operator
let permission = (isAdmin === true ) ? "AUTH_PERMISSION" : "AUTH_PERMISSION_NOT_ALLOWED";

console.log(permission)

navigator.getBattery().then(res=>console.log(res))

// one line solution for if else

// if(){

// }else{

// }

// AND , OR OPERTAOR

    // false       &&   // false              &&             // true == false -> AND OPERATOR
    // false       ||   // false              ||             // true == false -> OR OPERATOR

if(isAdmin===true && permission==="AUTH_PERMISSION" && myCgpa < 9 ){

}


// window.location.assign("/hiaslfdjsjkdfjsdf")
// window.location.replace("/hiaslfdjsjkdfjsdf")


// LOCAL STORAGE

localStorage.setItem("testKey",{
    name:"siddharth",
    age:100
})
