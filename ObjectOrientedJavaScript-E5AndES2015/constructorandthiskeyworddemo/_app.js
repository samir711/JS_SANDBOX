/* const brad = {

   name: 'Brad',
    age: 30
  
}

console.log(brad);
console.log(brad.age); */

function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
//  console.log(this);
}

//console.log(this);

//this.alert(2);


// const brad = new Person('Brad',36);
// const john = new Person('John',30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());