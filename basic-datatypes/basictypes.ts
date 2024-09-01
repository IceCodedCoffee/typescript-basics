// any kind of number
let age: number = 50;
let size: number = 1.5;

// strings
let myName: string = 'Max';
let herName: string = "Jessie";

//boolean
let x: boolean = true;
let y: boolean = false;

//enum
enum color {
    blue, // = 0
    red,  // = 1
    green // = 2
}

let hairColor: color = color.red; // = 1
console.log(hairColor);

//null and undefined
function doubleNumber(value: number) {
    return value * 2;
}

let variable1;
let variable2 = null;

console.log(doubleNumber(variable1));
console.log(doubleNumber(variable2));

//any
let variable3: any = "Text";
variable3 = 5;
variable3 = true;

//void, optional
function tripleNumber(value: number): void {
    value * 2;
}