var date = new Date();

var hour = date.getHours();
var day = date.getDay();
var dateOutput = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var seconds = date.getSeconds();

const format =
  month + "/" + dateOutput + "/" + year + ":" + hour + ":" + seconds;
console.log(format);

// function greet() {
//   var greeting;
//   if (hour < 12) {
//     return (greeting = "Good Morning!");
//   } else if (hour > 12 && hour < 18) {
//     return (greeting = "Good Afternoon");
//   } else {
//     return (greeting = "Good Night");
//   }
// }

// console.log(greet());

const actual = "cypress";
const expected = "CYPRESS";

// if (actual == expected) {
//   console.log("both values are equal");
// } else {
//   console.log("both values are not equal");
// }

String.prototype.equalsIgnoreCase = function (compareString) {
  return this.toUpperCase() === compareString.toUpperCase();
};

// if (actual.toUpperCase() == expected) {
//   console.log("both values are equal");
// } else {
//   console.log("both values are not equal");
// }

// console.log(actual.equalsIgnoreCase(expected));

// enum example
const browsers = {
  chrome: "CHROME",
  firefox: "FIREFOX",
  safari: "SAFARI",
};

const browser = browsers.firefox;

switch (browser) {
  case "CHROME":
    console.log("execute scripts in Chrome");
    break;
  case "FIREFOX":
    console.log("execute scripts in FIREFOX");
    break;
  case "SAFARI":
    console.log("execute scripts in SAFARI");
    break;

  default:
    console.log("execute scripts in headless mode");
    break;
}
