
// *) One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// 1) Let’s start with a primitive, such as a string.

// let name = "Kamlesh";
// let naam = name;
// console.log(name);
// console.log(naam);

// 2) Objects are not like that.

// a) A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

// ex

// let user = {
//     name: "John"
// };

// b) The object is stored somewhere in memory (at the right of the picture), while the user variable (at the left) has a “reference” to it.

// c) When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.

// d) Now here’s why it’s important.

// e) When an object variable is copied, the reference is copied, but the object itself is not duplicated.

// ex

// let user = { name: "John" };

// let admin = user; // copy the reference

// ex

// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// alert(user.name);

// *) It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. Then, if we later use another key (user), we are still opening the same cabinet and can access the changed contents.

// 3) Comparison by reference

// Two objects are equal only if they are the same object.

// let a = {};
// let b = a; // copy the reference

// alert( a == b ); // true, both variables reference the same object
// alert( a === b ); // true

// And here two independent objects are not equal, even though they look alike (both are empty):

// let a = {};
// let b = {}; // two independent objects

// alert( a == b ); // false

// 4) Const objects can be modified

// const user = {
//     name: "John"
// };

// user.name = "Pete"; // (*)

// alert(user.name); // Pete

// 5) Cloning and merging, Object.assign

// a) So, copying an object variable creates one more reference to the same object.
// But what if we need to duplicate an object?
// We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

// ex

// let user = {
//     name : "kamlesh",
//     age : 29
// }

// let clone = {}
// for(let key in user){
//     clone[key] = user[key];
// }
// clone.name = "Rahul";
// console.log(clone.name);
// console.log(user.name)

// 6) Object.assign

// syntax = Object.assign(dest, ...sources)

// let user = {
//     name : "kamlesh"
// };

// let permisssion1 = {canView : true}
// let permisssion2 = {canEdit : true}

// Object.assign(user, permisssion1, permisssion2);
// console.log(user.name);
// user.canEdit = false;
// console.log(user.canEdit);
// console.log(user.canView)
// console.log(permisssion2.canEdit)

// If the copied property name already exists, it gets overwritten:
// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });

// alert(user.name); // now user = { name: "Pete" }

// We also can use Object.assign to perform a simple object cloning:

// let user = {
//     name: "John",
//     age: 30
//   };

//   let clone = Object.assign({}, user);

//   alert(clone.name); // John
//   alert(clone.age); // 30

// 7)Nested cloning

// let user = {
//     name: "John",
//     size: {
//         width: 50,
//         height: 100
//     }
// }

// console.log(user.size.width)

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = Object.assign({}, user);
  
//   alert( user.sizes === clone.sizes ); // true, same object
  
//   // user and clone share sizes
//   user.sizes.width = 60;    // change a property from one place
//   alert(clone.sizes.width); // 60, get the result from the other one

// 8) structuredClone

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = structuredClone(user);
  
//   alert( user.sizes === clone.sizes ); // false, different objects
  
//   // user and clone are totally unrelated now
//   user.sizes.width = 60;    // change a property from one place
//   alert(clone.sizes.width); // 50, not related

