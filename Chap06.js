function sum(...arg) {
	let total = 0;
	for (let i of arg) {
		total += i;
	}
	return total;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2));

// Math.max() cannot take an array
// so we will have to spread it
let arr = [1, 2, 3, 4, 5];
console.log(Math.max(...arr));

// we can also add values to the spread
console.log(Math.max(1, 2, 3, ...arr, 6));
