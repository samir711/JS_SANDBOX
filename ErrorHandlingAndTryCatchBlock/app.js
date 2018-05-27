const user = {email: 'jdoe@gmail.com'}


try {
  // Produce a ReferenceError
 //  myFunction();
 //Produce a TypeError
  //null.myFunction()
 //Will produce SyntaxError
  //console.log(eval('2+2'));
//  console.log(eval('Hello world'));
 //Will produce URIError
 // decodeURIComponent('%');
  if (!user.name) {
  // throw 'User has no name';
   throw new SyntaxError('User has no name ');
 }
  
} catch (e) {
  console.log(`User Error : ${e.message}`);
  //console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally run regardless of results ....');
}

console.log('Program continues...');
