// its just a representation of checking and returning value if the other one is null or undefined

// let user = "Vishal";

// console.log(user ?? "Not yet Defined");


//  || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

// let temp = 0;

// console.log(temp || 18);
// console.log(temp ?? 18);


// Precedence

// we have to wrap with () to use math operators with coalenscing operators

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

console.log(area); // 5000