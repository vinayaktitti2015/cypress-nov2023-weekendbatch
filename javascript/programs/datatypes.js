// primitive data types

/**
 * string
 * number
 * boolean
 * null
 * undefined
 */

const firstname = "John";
const lastname = "Doe";
const rollNumber = 25;
const price = 1000;

const elementExist = true;
const elePresent = false;

const nul = null;
const undef = undefined;

/**
 * JS is a dynamic lang
 * Object based language
 * loosely-coupled language
 */

// non-primitive types
// Arrays
// Objects

const person = {
  firstname: "John",
  lastname: "Doe",
  age: 30,
  city: "Washington",
  country: "United States",
  address: "Washington 34232",

  getPersonDetails: function () {
    return (
      this.firstname +
      " " +
      this.lastname +
      " " +
      this.city +
      " " +
      this.country +
      " " +
      this.address
    );
  },
};

console.log(person.firstname + " " + person.lastname)
console.log(person.age + " " + person.city)

// const / let / var
var undefValue;
console.log(undefValue)

console.log(person.getPersonDetails())