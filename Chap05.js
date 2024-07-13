// number methods
let num = 103.941;

console.log(num.toFixed(2)); // changing precision
console.log(typeof num.toString());
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

console.log(isNaN(NaN)); // checking if a value is not a number
console.log(isNaN(num));

console.log(isFinite(Infinity)); // checking if a value is a finite number
console.log(isFinite(num));

// string methods
let str = "this is a string";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str[3]);
console.log(str.at(-2));
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("s"));
console.log(str.includes(" a"));
console.log(str.startsWith("the"));
console.log(str.slice(1, 5));

// arrays
let arr = ["a", "b", 3];
arr.push("new"); // can add multiple at once
arr.pop(); // removes end
arr.unshift("first"); // adds to front (can also add multiple at once)
arr.shift(); // removes from front
arr.splice(1, 2); // removing two elements starting at index 1
arr.splice(0, 0, "added"); // remove nothing, add "added" at index 0

console.log(arr.slice(0, 1));

arr.sort(); // sorting in place

let lengths = arr.map((item) => item.length); // map function
console.log(lengths);

// for-each loops
for (let item of arr) {
	console.log(item);
}

// do NOT compare arrays with ==, instead compare item by item

letters = "harrypotter".split("");
console.log(letters);
console.log(letters.join("::"));

// hashmaps
let emails = new Map();
emails.set("Bob", "bob@hotmail.com");
emails.set("Alice", "alice@gmail.com");
console.log(emails);

console.log(emails.get("Bob"));

// all primitive types and objects can be used as keys
emails.set(17, "seventeen");

// sets
let mySet = new Set();
mySet.add(1);
mySet.add(1);
console.log(mySet);
