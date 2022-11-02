// String
const singleQuote = 'Hello! ${2 + 2}';
const doubleQuote = "Hello!";

const name = 'Satish';
const backTicks = `Hello, ${name}! Here is sum of 2 + 2 = ${2 + 2}`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(backTicks);

// Numbers
const wholeNumber = 5;
const decimalNumber = 0.5;

const addResult = wholeNumber + decimalNumber;
const subResult = wholeNumber - decimalNumber;
const multResult = wholeNumber * decimalNumber;
const divResult = wholeNumber / decimalNumber;

const NAN = singleQuote / wholeNumber;

console.log(wholeNumber);
console.log(typeof wholeNumber);
console.log(decimalNumber);
console.log(typeof decimalNumber);
console.log(addResult);
console.log(subResult);
console.log(multResult);
console.log(divResult);
console.log(NAN);
console.log(typeof NAN);

// Booleans (true and false)

const isCool = true;
console.log(isCool);

if(isCool) {
    console.log("Hi man, you're cool.");
} else {
    console.log("oh, hi...");
}

const age = 23;
console.log(age > 50);