// undeclared variables
// x = 5;
// y = 6;
// z = x + y;

// console.log("total output is " + z);

// // var keyword usage
// var x = 5;
// var y = 6;
// var z = x + y;

// console.log("total output is " + z);

/**
 * var is from JS
 * let is from ES6 module
 * const is from ES6 module
 * undeclared variables
 */

/**
 * JS dont have OOPS
 * JS dont have data types
 * JS is a dynamic language
 * JS ia object based language
 * JS dont have classes, constructors/promises
 * JS dont have let and const keyword
 *
 * ES implementation the above topics in JS
 */

// // let keyword usage
// let x = 5;
// let y = 6;
// let z = x + y;

// console.log("total output is " + z);

// const keyword usage
// const x = 5; // fixed value
// const y = 6;
// const z = x + y;

// console.log("total output is " + z);

// // var and let values are dynamic

// const price1 = 1000.222;
// const price2 = 3000;
// let total = price1 + price2;
// console.log(total);

// // person details
// const first_Name = "John";
// const lastName = "Doe";
// let age = 30;
// let address1 = "Hyd 523322";
// let address2 = "Hyd 523322";
// let $city = "Hyd";
// let Age = 40;

// let mixedVariables = 5 + 10 + "5" + 12;
// console.log( mixedVariables);

// let keyword rules
// cannot be reclared
// let x1 = "james";
// let x2 = "Kumar";

// // block scope
// {
//     var ab = 200;
// }

// console.log( ab );

// redeclaring values
// global variable
let ab = 10;

{
  // local variables
  let ab = 20;
  console.log("inner block " + ab);
}

console.log("outer block " + ab);

// hoisting 
var carName;

// after executing few lines of code - sometime
carName = "Audi";
console.log(carName);
