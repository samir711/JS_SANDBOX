// const sayHello = function() {

//   console.log('Hello');
// }

// const sayHello = () => {

//   console.log('Hello');
// }

// One line function does not need braces
//const sayHello = () => console.log('Hello');

//One line returns

//const sayHello = () => 'Hello';

// Same as Above

// const sayHello = function () {
//   return 'Hello';
// }

//Return Objects
// const sayHello = () => ({ msg: 'Hello' });

//const sayHello = (name) => console.log(`Hello ${name} `);

// Single param does not need paranthesis.
//const sayHello = name => console.log(`Hello ${name} `);

//Multiple params need paranthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Samir','Arora');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

//Shortest 
const nameLengths = users.map(name => name.length);

console.log(nameLengths)
