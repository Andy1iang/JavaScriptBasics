// try catch blocks

try {
	null.doThis();
	// only runtime errors will be caught
	// setTimed code won't be caught
} catch (err) {
	console.log("We got an error!");
	console.log(err.name); // name of error
	console.log(err.message); // error message
	console.log(err.stack); // error call stack
}

// throwing an error
try {
	if (2 + 2 !== 5) {
		throw new Error("BELIEVE!");
	}
} catch (err) {
	console.log(err);
}
