// Create element

const li = document.createElement('li');

// Add Class
li.className = 'Collection-item';

// Add id

li.id = 'new-item';

// Add attribute

li.setAttribute('title', 'New Item');

// Create text node and append

li.appendChild(document.createTextNode('Hello World'));


// Create a new link elements

const link = document.createElement('a');

// Add Classes

link.className = 'delete-item secondary-content';

//Add Icon Html

link.innerHTML = '<i class="fa fa-remove"></i>'

//Append lin into li

li.appendChild(link);

// Append i as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);