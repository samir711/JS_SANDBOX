// Create some arrays

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple','Banna','Orange','Pear'];
const mixed = [22,'Hello',true,undefined,null, {a:1,b:2}, new Date()];

let val;

//Get Array Length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);
//Get single value
val = numbers[3]; // Array are zero based
val = numbers[0];
//Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAY 
// Add on to end.
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from the end
numbers.pop();
//Take off from front
numbers.shift();
// Splice values
//console.log(numbers);
numbers.splice(1,3);
// Reverse
numbers.reverse();

// concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the "compare function"

val = numbers.sort(function(x, y) {
 return x - y;
});

// Reverse sort

val = numbers.sort(function(x, y){
  return y - x;

});




console.log(numbers);
console.log(val);

function under50(num) {

  return num < 50;
}
function over50(num) {

  return num > 50;
}
const numbers3 = [43,56,33,23,44,36,5];
val = numbers3.find(under50);
val = numbers3.find(over50);

console.log(val);


// console.log(mixed);
