/* "Use strcit" is used to define the current JS file to treat as modern JS. and strictly check for errors which are usually ignored by JS.

It should be defined at the very first line of the code in the parent file.
*/

// this code works the modern way
"use strict";

// Variables

/*
Lets lern about the variables.
Defination: Imagine a box where you store you fruits. So the variable is a box to store your values.
*/

/*
There are 3 ways to difine a variable
1: var
2: let
3: const

How to define a Variable in JS.
*/

var Uname;
let message;
const Usurname = "Ravanank";
/* 
useing let and var you can define a varible whose value are changable. But when you define a constant variable using const you have to initialise the variable for a specific dataType.
*/

// How to assign value to variables in JS

Uname = "Vishal";
message = "Hello";

// You can'T assign a value to constant variables.

// Usurname =  "Ravanank."; You can not do this

/*
How to use a variable in JS.
*/

console.log(message);
console.log(Uname);
console.log(Usurname);
