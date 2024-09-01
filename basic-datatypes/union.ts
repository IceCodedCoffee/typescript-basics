let value: string | number;

value = 123;
value = 'banana';

function simpleFunc(val : number | string) {
	console.log(val);
}

simpleFunc(1234); // Ok
simpleFunc("Hello world"); // Ok
// simpleFunc(true); // error