// promises

let promise = new Promise(function (resolve, reject) {
	// after 1 second signal that the job is done with the result "done"
	setTimeout(() => reject("done"), 1000); // time out for 1s
});

// executes when the promise call is done
promise.then(
	(result) => console.log("Done"), // if successful
	(error) => console.log("Error") // if not successful
);

// this will execute before the promise is done
console.log("cool");

// async and await

async function f() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("done!"), 1000);
	});

	let result = await promise; // wait until the promise resolves
	// without 'await', this would just be a pending promise

	console.log(result); // "done!"
}

f();

// this will execute before the promise & the async function is done
console.log("cool #2");
