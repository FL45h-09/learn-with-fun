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

// const addUser = (name, age)=>{
//   return {
//     name : name,
//     age : age,
//   };
// }

// short hand
const addUser = (name, age)=>{
  return {
    name,
    age,
  };
}

let users = addUser("vishal", 30);

// console.log(users.name);



// Property names limitations

// there are no limitations on properties names like variables
const obj3 = {
  for: 1,
  let: 2,
  return: 3
};

// console.log(obj.for + obj.let + obj.return);