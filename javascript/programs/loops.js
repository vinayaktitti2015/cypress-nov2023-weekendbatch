const tools = ["selenium", "cypress", "playwright", "katalon", "Mabl", "UFT"];

// traditional for loop
// for (let i = 0; i < tools.length; i++) {
//   console.log(tools[i]);
// }

// enhanced for loop
// tools.forEach((value) => {
//   console.log(value);
// });

const person = {
  firstname: "John",
  lastname: "Doe",
  age: 30,
  city: "Washington",
  country: "United States",
  address: "Washington 34232",
};

// for in loop
let final = " ";
for (let x in person) {
  final += person[x] + " ";
}

console.log(final);
