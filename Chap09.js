// class declarations

class Food {
	edible = true; // variable across all instances of the class (class field)

	static info() {
		console.log("This is a Food class");
	}

	constructor(name) {
		this.name = name;
		Food.foodCount += 1;
	}

	eat() {
		console.log(`Eating ${this.name}, yum!`);
	}

	make() {
		console.log(`Making ${this.name}`);
	}
}

sushi = new Food("sushi");
sushi.eat();
console.log(sushi.edible);

// class inheritance

class Burger extends Food {
	constructor(name, size) {
		super(name); // calling parent class constructor
		this.size = size;
	}

	// overriding
	eat() {
		console.log(`Eating the ${this.size} ${this.name}, yum!`);
	}

	make() {
		super.make();
		console.log("Putting the pieces together");
	}
}

let burger = new Burger("burger", "large");
burger.eat();
burger.make();
console.log(burger.edible);

// getters and setters

class debt {
	constructor(amount) {
		this._amount = amount;
	}

	get amount() {
		return this._amount;
	}

	// remove this to make it read only
	set amount(amount) {
		if (amount > 0) {
			this._amount = 0;
		} else {
			this._amount = amount;
		}
	}
}

let loan = new debt(-100);
console.log(loan.amount);

loan.amount = 200;
console.log(loan.amount);
