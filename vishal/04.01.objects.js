// Lets learn the objects

// Objects are Non premitive dataTypes and it stores daya with key-value pair.

// syntax
// there are 2 ways to create an Object
let obj = new Object(); //this is called as object constructor
let obj2 = {}   //this is called as object literal

let user = {    
    name: "Vishal",
    age: 30
  };


// console.log(user.name);

// to remove the property we can use delete keyword
// delete user.name;

// We Can multiword the property name but they must be in ""

let user2 = {
    "name": "Vishal",
    "age": 30,
    "is Admin": true, 
  };


//   and the last property must end with comma


// user2.is admin = true; // This will give an error because multiword properties can't be access like this

// we have to use them in [] brackets

user2["is admin"] = true;