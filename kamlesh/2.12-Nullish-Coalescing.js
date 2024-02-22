// 1) The nullish coalescing operator is written as two question marks ??.

// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.

// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

// result = (a !== null && a !== undefined) ? a : b;

// 2) The common use case for ?? is to provide a default value.

// For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:

// let user;
// alert(user ?? "Anonymous"); // Anonymous (user is undefined)

// 3) Here’s the example with user assigned to a name:

// let user = "John";
// alert(user ?? "Anonymous"); // John (user is not null/undefined)

// 4)

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first defined value:
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// 5)Comparison with ||

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first truthy value:
// alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

// On the other hand, the nullish coalescing operator ?? was added to JavaScript only recently, and the reason for that was that people weren’t quite happy with ||.

// The important difference between them is that:

// || returns the first truthy value.
// ?? returns the first defined value.
// In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

// 6)

//let x = 1 && 2 ?? 3; // Syntax error

let y = (1 && 2) ?? 3; // Works

alert(x); // 2