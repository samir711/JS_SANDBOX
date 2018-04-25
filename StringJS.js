const firstName = 'William';
const lastName  = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad'


let val;
val = firstName + ' '+ lastName ;

val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

//concat()
val = firstName.concat(' ' , lastName);

//Change Casse
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName[1];

// indexOf()

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// CharAt()

val = firstName.charAt(2);

// Get last Character

val = firstName.charAt(firstName.length -1);

// SubString()

val = firstName.substring(0,4);

// slice()

val = firstName.slice(0,4);

val = firstName.slice(-3); // last character in case of negative number

// Split
val = str.split(' ');

// replace()

val = str.replace('Brad','Jack')

// include()

val = str.includes('Hello');

val = str.includes('foo');

console.log(val);