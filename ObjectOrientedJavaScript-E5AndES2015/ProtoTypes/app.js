//Object.prototype

//Person.prototype

// Person Construction

function Person(firstName,lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }

}

//Calculate age

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


// Get Full Name

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}


// Get Married

Person.prototype.getsMarried = function (newLastName) {

  this.lastName = newLastName;
  

}

const john = new Person('John', 'Deo', '8-12-90');
const marry = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(marry);
console.log(marry.calculateAge());
console.log(marry.getFullName());
console.log(john.calculateAge());
console.log(john.getFullName());

marry.getsMarried('Smith');

console.log(marry.getFullName());

console.log(marry.hasOwnProperty('firstName'));

console.log(marry.hasOwnProperty('getFullName'));
