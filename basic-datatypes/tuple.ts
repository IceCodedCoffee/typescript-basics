//tuple
let worker: [number, string] = [123, 'Max'];

console.log(worker[0]); // -> 123
console.log(worker[1]); // -> Max

//array of tuples
let users: [number, string][] = [
	[123, 'Max'],
	[456, 'Ben']
];

console.log(users[0][0]); // -> 123
console.log(users[1][0]); // -> 456