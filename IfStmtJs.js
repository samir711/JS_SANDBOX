const id = 100;

/* if id does not exit the JS through  Uncaught ReferenceError: id is not defined and else will not executed  
solution is typefo operator follow example 2
*/
// if (id) {
  
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

/* example 2 - Test if undefined */
// if (typeof id !== 'undefined') {

//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

//Greater OR Less Than

// if (id > 200) {

//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

//IF ELSE

const color = 'red';

// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is Yello');
// } else {
//   console.log('Color is not red or blue');
// }

//LOGICA OPERATOR

const name = 'Steve';
const age = 20;

// AND &&
if (age > 0 && age < 12) {
  
  console.log(`${name} is a child`);

} else if (age >= 13 && age <= 19) {

  console.log(`${name} is a teenager`);
} else {

} console.log(`${name} is an adult.`);

// OR ||

if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR

console.log(id === 100 ? 'CORRECT':'INCORRECT');