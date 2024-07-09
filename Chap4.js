// objects

let food = {
	name: "Cheeseburger",
	price: 15,
	vegan: false,
};

console.log(food.name);
console.log(food["price"]);

delete food.name; // deleting
food.price = 1; // updating

console.log(food.name);
console.log(food["price"]);

console.log(Object.keys(food));
console.log(Object.values(food));
console.log(Object.entries(food));

console.log("name" in food);

// objects are copied by reference
// we can also modify const objects through the reference (can cause issues)
let food2 = food;
food2.price = 1000000;
console.log(food.price);

// assigning values from objects to other objects
let food3 = {
	price: 10,
	keto: false,
};
Object.assign(food, food3); // can have more than 1 arguments to assign
console.log(Object.entries(food));
// existing key values are overwritten
// new key values are added

// to deal with nested objects (avoiding copying by reference)
foodClone = structuredClone(food);

// this in objects
// arrow functions don't have 'this'
let friend = {
	name: "John",
	age: 23,
	greet: function () {
		console.log(`Hello, my name is ${this.name}.`);
	},
};

friend.greet();

// new keyword
function Person(name, age) {
	this.name = name;
	this.age = age;
}
let person = new Person("John", 23);

// Symbols
let id = Symbol("id");
let fakeId = Symbol("id");
console.log(id == fakeId); // false

let student = {
	[id]: 1, // syntax for symbols
	name: "Alec",
	age: 18,
};

// Symbols are skipped often (but will be cloned)
console.log(Object.keys(student));
