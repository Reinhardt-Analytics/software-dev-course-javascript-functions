// Script 1 - Greeting multiple users
console.log("Welcome, Alice!");
console.log("Welcome, Bob!");
console.log("Welcome, Charlie!");

// Script 1 - Revision
function greet(name) {               
  return `Welcome, ${name}!`;         
}

console.log(greet("Alice"));
console.log(greet("Bob"));
console.log(greet("Charlie"));

// Script 2 - Sum calculation
let num1 = 5, num2 = 10;
let sum = num1 + num2;
console.log("The sum of 5 and 10 is " + sum);

//Script 2 - Revision
function sumTwo(a, b) {
  return "The sum of " + a + " and " + b + " is " + (a + b);
}

let a = 5, b=10;
console.log(sumTwo(a, b));

// Script 3 - Product calculation
let product = num1 * num2;
console.log("The product of 5 and 10 is " + product);

// Script 3 - Revision
function sumTwo(a, b) {
  return "The product of " + a + " and " + b + " is " + (a * b);
}

let a = 5, b = 10;
console.log(sumTwo(a, b));

// Script 4 - Print names from a list
let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Script 5 - Revision
function printList(label, arr) {
  console.log(label);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
