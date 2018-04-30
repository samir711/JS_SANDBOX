let val;


let birthday = new Date('9-10-1981 11:25:00');

birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

const today = new Date();
/** Gets the month zero based **/
val = today.getMonth();

/** Gets the day-of-the-month **/
val = today.getDate();
/** Gets the day of the week **/
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

/** Sets the month zero based **/
birthday.setMonth(2);

birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
console.log(birthday);
//console.log(val);