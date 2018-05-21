const personPrototypes = {

  greeting: function () {
    
    return `Hello there ${this.firstName} ${this.lastName}`;
  },

  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  }
}

 // First way of Object.create

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Willaims';
mary.age = 30;
console.log(mary);
console.log(mary.greeting());

mary.getsMarried('Thompson');
console.log(mary.greeting());


const brad = Object.create(personPrototypes, {
  firstName: { value: 'Bred' },
  lastName: { value: 'Traversy' },
  age : {value: 36 }

});

console.log(brad);
console.log(brad.greeting());
brad.getsMarried('Smith');
console.log(brad.greeting());