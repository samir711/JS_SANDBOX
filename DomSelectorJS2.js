// document.getElementByClassName

//Globally
// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'hello';

//Getting from the ul

//const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

//console.log(listItems);

// let lis = document.getElementsByTagName('li')
// console.log(lis);
// lis[0].style.color = 'red';
// lis[3].textContent = 'hello';

// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index} : Hello`;
// });
// console.log(lis);

// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');


items.forEach(function (item, index) {
  item.textContent = `${index} : Hello`;


});

const liOdd  = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#CCC';
});

for (let index = 0; index < liEven.length; index++) {
  liEven[index].style.background = 'green';
  
}

console.log(items);