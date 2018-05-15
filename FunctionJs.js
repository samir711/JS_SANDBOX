//FUNCTION DECLATATION

function greet(firstName = 'John', lastName='Deo') {

  // if (typeof firstName === 'undefined') firstName = 'John';
  // if (typeof lastName === 'undefined') lastName = 'Doe';

  return 'Hello ' + firstName + ' ' + lastName ;

}

//console.log(greet());

// FUNCTION EXPRESSION

const square = function(x =3) {
  return x * x;
};
// console.log(square(8));

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSION - IIFs

// (function () {
//   console.log('IIFE Ran..');
// })()

// 

// PROPERTY METHODS

const todo = {
  add: function() {
    console.log('Add todo..');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log('Delete todo...');
};
todo.add();
todo.edit(22);
todo.delete();
