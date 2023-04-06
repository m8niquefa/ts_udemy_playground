const apples: number = 5;
const speed: string = "fast";
const hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects

let now: Date = new Date();

// Array

let colors: string[] = ["red", "green", "blue"];

let myNumbers: number[] = [1, 2, 3];

let truths: boolean[] = [true, false, true];

// Classes

class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = { x: 10, y: 20 };

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//Any type: avoid using this type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
console.log(typeof(json));
console.log(typeof(coordinates));

let words =  ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// Variable whose type cannot be inferred correctly
let numbers = [-10, -1, -12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) { 
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
if (typeof(numberAboveZero) === "boolean") {
  console.log("No number above zero");
} else {
  console.log(numberAboveZero);
}


console.log("END OF FILE");