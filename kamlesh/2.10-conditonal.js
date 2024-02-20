// 1) if statememt
// how if statement Work:-
// step :- It will check the condition, if the condition is true it will show output or else it will exit the program.

// let year = prompt("In which year ES6 was Launced" , 2015);
// if(year == 2015){
//     alert('You are right!');
// }

// 2) ie else statement
// how if else statement Work:-
// step :- it will check the condition if condtion is true it will print statement or it will print else statement.

// let age = prompt("Enter your age", 18);

// if(age >= 18){
//     alert("You are Elgible.");
// } else {
//     alert("You are not Eligible.")
// }

// 3) if else if statement

// let age = prompt("Please enter your Age ? ", 18);

// if(age < 17){
//     alert("You are very Young.");
// } else if(age < 30){
//     alert("You have perfect age.");
// }else{
//     alert("You are very old.")
// }

// 4) Ternary Operator

let age = prompt("Please Enter your Age ?", 18);
age = Number(age);
console.log(typeof (age));

let message = (age < 3) ? alert("Hi Baby") : (age < 18) ? alert("Hello") : (age < 100) ? alert("Greetingd") : alert("What an unusual Age!");