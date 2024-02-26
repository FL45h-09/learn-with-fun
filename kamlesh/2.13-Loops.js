// 1) The “while” loop

// The while loop has the following syntax:

// while (condition) {
//   code
//   so-called "loop body"
// }

// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
// alert( i );
// i++;
// }

// For instance, a shorter way to write while (i != 0) is while (i):

// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
// alert( i );
// i--;
// }

// 2) The “do…while” loop

// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

// do {
// loop body
// } while (condition);

// let i = 0;
// do {
// alert( i );
// i++;
// } while (i < 3);

// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

// 3) The “for” loop

// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
// alert(i);
// }