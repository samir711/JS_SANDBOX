let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;

// 1- Element
// 2- Attribute
// 3 - Text Node
// 8 - Comment
//9 - Document itself
//10 - Doctype

// Get childern element nodes

val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
list.children[3].children[0];

// First child

val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count Child Elements
val = list.childElementCount;

// Get Parent Node.

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get Next Sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get previous Sibling

val = listItem.previousSibling;
val = listItem.previousElementSibling;



console.log(val);





