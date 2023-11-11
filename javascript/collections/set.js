// set use cases

const letters = new Set(["a", "b", "c", "d", "e", "f", "g"]);

console.log(letters);

// add elements
letters.add("a");
letters.add("p");
letters.add("o");

console.log(letters);

/**
 * List - allow duplicates
 * Set - wont allow duplicates
 */

// delete elements
letters.delete("a");
console.log(letters);

// remove elements
// letters.remove();
// console.log(letters);

// for each

let text = " " + "\n";
letters.forEach(function (value) {
  text += value;
});

console.log("list of elements: " + text);
