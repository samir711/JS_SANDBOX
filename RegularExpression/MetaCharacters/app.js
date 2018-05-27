let re;
// Literal Characters
re = /hello/;
re = /hello/i; //i means case insensitive
//Metacharacter Symbol
re = /^h/i // ^ Must start with h
re = /d$/i; // $ Must ends with d
re = / world$/i; // $ Must ends with d
re = /^hello$/i; // Must begin and end with hello
//re = /h.llo/i; // . Matches any character only one character if heello fails
re = /h*llo$/i; // * Matches any character 0 or more times
re = /gre?a?y/i; // Optional chracter make e and a optional
                // Gray or Grey or Gry maches but not Griy
re = /gre?a?y\?/i; // Escape character \ will escape ? in this example works for 'Gray?' but fails for 'Gra?' b/c y is not optional

// Brackets [] - character sets
re = /gr[ae]y/i; // Must be  a or e
re = /[GF]r[ae]y/i; // Must be  G or F
re = /[^GF]ray/i; // Match anything except G or F Do not confuse with "^ Must start with " for that use /^[GF]ray/i;
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any  letter
re = /[0-9]ray/; // Match any digit
re = /[0-9][0-9]ray/; // Match any digit

// Braces {} - Qualifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of time in this case l must appear 2 times
re = /Hel{2,4}o/i; // Must appear 2 to 4 amout of times in this case valid string - hello, helllo, hellllo but not helllllo will fail.

re = /Hel{2,}o/i; // Must appear 2 or more times (Must occur at least {m} times)
//valid Hello,Helllo, Hellllo,Helllllo,Helllllo
//invalid Helo b/c it must appear 2 time or more

//Parentheses () - Grouping
re = /([0-9]x){3}/i;
re = /^([0-9]x){3}$/i; 

// Shorthand Character Classes
re = /\w/; // \ - Word character - alphanumeric or _
re = /\w+/; // + - one or more Word character - alphanumeric or _
//does not match '()' or '!' 
re = /\W+/; // Non-word character except re = /\w+/(Capital W) ;
//match '*', '!' (opposite of character)
re = /\d/; //Match any digit.
re = /\d+/; //Match any digit 0 or more times
re = /\D+/; //Match any Non Digit
re = /\s/; //Match whitespace char
re = /\S/; //Match non whitespace char
re = /Hell/i; // Word boundary
re = /Hell\b/i; // Word boundary
//The \b metacharacter is used to find a match at the beginning or end of a word
//const str = 'Hello, welcome to Hell';

re = /x(?=y)/; // Match x only if followed by y.
//const str = 'qwwqcsfdfxydfday';

re = /x(?!y)/i; // Match x only if NOT followed by y.
//const str = 'qwwqcxsfdfxydfday';

//String to match
const str = 'qwwqcxsfdfxydfday';

//const str = 'Hello';
//const str = 'Hello world';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  }
    else {
      console.log(`${str} does NOT match ${re.source}`);
    }
  
}

reTest(re, str);












