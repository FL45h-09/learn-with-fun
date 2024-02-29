// Arrow Function

// it is the simpliest way to create functions expression


let newFunction = () =>{
    console.log("Hello World");
}

// newFunction();


let sum = (a, b) => a + b;
// console.log(sum(10, 20));


let age = 20;

let welcome = (age < 18) ?
  () => console.log('Hello!') :
  () => console.log("Greetings!");

welcome();