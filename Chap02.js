// This is a single line comment

/* This
is a
multiline
comment */

// Log a message to the console
console.log("Hello World");

// Variables
let x = 10;
console.log(x);

x = "changed"; // variables are dynamically typed
console.log(x);

// Constants
const GRAVITY = 9.8; // Cannot be reassigned
console.log(GRAVITY);

// Arithmetic operations
let a = 10;
let b = 20;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

console.log(a / 3.3); // Automatic type conversion

console.log(a % 3);

console.log(a ** b);

console.log(a / 0); // We'll never get an error with arithmetic operations

// Strings
let myName = "Andy";
let intro = `Hello, my name is ${myName}.`;
console.log(intro);

// Boolean values
let y = true;
console.log(y);

// Null & Undefined value
let z = null;
console.log(z);

let w = undefined;
console.log(w);

// Types
console.log(typeof y); // type checking

y = String(y); // string type conversion
console.log(typeof y);

c = Number("3.3"); // number type conversion
console.log(typeof y);

/* Number Conversion notes:
    undefined -> NaN
    null -> 0
    true -> 1
    false -> 0
    empty string -> 0
    string -> NaN
*/

// Comparison operators
console.log(0 == false); // true

console.log(0 === false); // strict equality

// Conditional Statements
let time = 15;

if (time < 12) {
	console.log("Good morning");
} else if (time < 18) {
	console.log("Good afternoon");
} else {
	console.log("Good evening");
}

// ? operator
// condition ? true : false

let age = 18;
let adult = age >= 18 ? true : false;
console.log(adult);

// Logical Operators
// remember short circuit evaluation

console.log(true && true);
console.log(true && false);
console.log(false || true);
console.log(false || false);
console.log(!true);

// ?? operator
// nullish coalescing operator

let make = null;
let model = "4runner";

console.log(make ?? model); // can also be chained multiple times

// while loops
let i = 0;
while (i < 3) {
	console.log(i);
	i++;
}

// do while loops (will happen at least once)
i = 0;
do {
	console.log(i);
	i++;
} while (i < 0);

// for loops
for (let j = 0; j < 3; j++) {
	console.log(j);
}

// break and continue are the same as python
// except break can break outer loops

outer: for (let j = 0; j < 3; j++) {
	inner: for (let k = 0; k < 3; k++) {
		if (k === 1) {
			break outer;
		}
		console.log(j, k);
	}
}

// Switch statements
let num = 1;

// switch checks using ===
switch (num % 2) {
	case 0:
		console.log("even");
		break;
	case 1:
		console.log("odd");
		break;
	default:
		console.log("something wrong");
}

// Functions
function add(a, b) {
	return a + b;
}

console.log(add(1, 2));

// callback functions are just functions passed as arguments

// arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
