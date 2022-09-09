// let nameOfPerson = 'siddharth';
// //012345678
// // string variable
// console.log(nameOfPerson);

// // inbuilt name
// // to test wheaterh a particular substring is present or not
// let index = nameOfPerson.indexOf('arth');
// console.log('INDEX', index);

// let value = 123;
// value += 12;
// // value = value + 12; +=
// console.log('VALUE', value);
// // tactics, string literal

let testString = `testname-${value}`;

console.log(testString);

function myFunction(number) {
  if (number % 2 == 0) {
    // if number is even
    // return true;
  } else {
    // return false;
  }
}

const myFunction2 = number => {
  if (number % 2 == 0) {
    // if number is even
    // return true;
  } else {
    // return false;
  }
};

let obj = {
  name: 'siddharth',
  age: 12,
  cgpa: 10,
};
// Object , data stucture in js , 
let jsonObj = {
  name: 'Siddharth',
  age: '123',
  cgpa: '10',
}; //JSON

console.log(obj.cgpa);

// console.log(myFunction(10));
// HTML FORM -> API CALL ->  PAGE DATA

// Two methods

// XHR MEthod

//  DATA TRANSFER
//  FORMAT -> JSON/XML
// JSON



let tableBody = document.querySelector('#table-body');
let loader = document.querySelector('.api-loader');
// very first element element in DOM 

let Input= document.getElementById('table-body');


// console.log(tableBody);

tableBody.innerHTML = 'Hello world';

// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// xhr.responseType = 'json';
// xhr.onload = function () {
//   // console.log(xhr.response); //JSON != Javascript Array
//   let data = xhr.response; // Javscript variable convert
//   // console.log(data);

//   let newTableBody = '';

//   for (let record of data) {
//     newTableBody += `
//     <tr>
//     <td scope="row">${record.id}</td>
//     <td scope="row">${record.title}</td>
//   </tr>
//     `;
//   }

//   tableBody.innerHTML = newTableBody;
//   // upadate loader css
//   loader.style.display = 'none';
// };

// xhr.onerror = function () {};

// xhr.send();

// FETCH METHOD

fetch('https://jsonplaceholder.typicode.com/posts?page=10&status=1,2,3,4')
  .then(response => response.json())
  .then(function (data) {
    // console.log('DATA=>', data);

    let newTableBody = '';

    for (let record of data) {
      newTableBody += `
    <tr>
    <td scope="row">${record.id}</td>
    <td scope="row">${record.title}</td>
  </tr>
    `;
    }
    tableBody.innerHTML = newTableBody;
    // upadate loader css
    loader.style.display = 'none';
  })
  .catch(function (error) {
    console.log('ERR', error);
  });

// try {
//   /// api call failt
//   // data maniuplsa
// } catch {
//   // error
// } finally {
//   // code
// }
// DOM me very first element ko pick karega
let emailInput = document.querySelector('#email-input');
console.log(emailInput);

// Regex funciton to test email address validity
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


// <elemetn>.addEventListener('',    )
// string , function
// predefined 


emailInput.addEventListener('focus', function (e) {
  // console.log(e.key);
  // bootstrap validation interactive page
  console.log(emailInput.value);
  if (validateEmail(emailInput.value)) {
    console.log('VALID');
  } else {
    console.log('INVALID');

    if (emailInput.className.indexOf('is-valid') != -1) emailInput.className += 'is-invalid';
  }
  // check if its valid email address of not

  // html email input className ko modify karna hai
});
