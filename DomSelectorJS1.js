//GET ELEMENT BY ID

// console.log(document.getElementById('task-title'));


// //Get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').id);

// const taskTitle = document.getElementById('task-title')

// //Change styling

// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// //document.getElementById('task-title').style.display = 'none';

// // document.getElementById('task-title').style.background = '#333';
// // document.getElementById('task-title').style.color = '#fff';
// // document.getElementById('task-title').style.padding = '5px';
// // //document.getElementById('task-title').style.display = 'none';

// //Change content

// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'MyTask List';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'MyTask List';
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';