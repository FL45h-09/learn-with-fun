
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). 

// A) || (OR)

// 1) result = a || b;
// 2) If any of its arguments are true, it returns true, otherwise it returns false.
// 3) There are four possible logical combinations:

//     alert( true || true );   // true
//     alert( false || true );  // true
//     alert( true || false );  // true
//     alert( false || false ); // false

// 4) If an operand is not a boolean, it’s converted to a boolean for the evaluation.

// let hour = 11;
// if(hour < 12 || hour > 10){
//     alert("Office is Open")
// }

// 5) Logical OR finds Truthy value
// 6) Evaluates operands from left to right.

// alert( 1 || 0 );  // 1

// alert( null || 1 );  // 1

// alert( null || 0 || 1 ); // 1

// alert( undefined || null || 0 );  0

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// If all variables were falsy, "Anonymous" would show up.

// B) && (AND)

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// ex:- 

// let hour = 12;
//     let minute = 30;

//     if (hour == 12 && minute == 30) {
//     alert( 'The time is 12:30' );
//     }

// 1) AND “&&” finds the first falsy value.
// 2) For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// 3) AND returns the first falsy value or the last value if none were found.

// alert( 1 && 2 && null && 3 ); // null

// C) ! (NOT)

// result = !value;

// The operator accepts a single argument and does the following:

// 1) Converts the operand to boolean type: true/false.
// 2) Returns the inverse value.

// alert( !true ); // false

// *) Task

alert(alert(1) || 2 || alert(3));