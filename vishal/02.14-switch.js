// Swith case is also another way of having conditional checks.
// let test = 1;
// switch (test){
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     default:
//         console.log("default");
//         break;
// }

// Grouping of “case”

let newTest = 5;

switch (newTest) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}