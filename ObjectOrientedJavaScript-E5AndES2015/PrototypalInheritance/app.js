// Person Constructor

function Person(firstName, lastName) {

  this.firstName = firstName;
  this.lastName = lastName;

}

// Greeting

Person.prototype.greeting = function () {
  
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

//Customer constructor

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

//Inherit the Person prototype methods

Customer.prototype = Object.create(Person.prototype);

Customer.prototype.constructor = Customer;


const customer1 = new Customer('Tom', 'Smith', '555-222-5548', 'Standard');

console.log(customer1);

console.log(customer1.greeting());

// Customer Greeting

Customer.prototype.greeting = function () {
   return `Hello there ${this.firstName} ${this.lastName} Welcome to our company `;

}

console.log(customer1.greeting());