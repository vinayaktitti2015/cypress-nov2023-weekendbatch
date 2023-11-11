const tools = new Map([
  ["selenium", 1],
  ["cypress", 2],
  ["playwright", 3],
]);

console.log(tools);

// add the element to the map
tools.set("Mabl", 4);
console.log(tools);

// get function
const output = tools.get("cypress");
console.log(output);

console.log(tools.size)

console.log(tools.has('Katalon'))