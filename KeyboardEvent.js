const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

//form.addEventListener('submit', runEvent);

//Key down
//taskInput.addEventListener('keydown', runEvent);
// Key Up
// taskInput.addEventListener('keyup', runEvent);
// Key press
//taskInput.addEventListener('keypress', runEvent);
//Focus 
//taskInput.addEventListener('focus',runEvent);
// Blur 
//taskInput.addEventListener('blur', runEvent)
//cut
//taskInput.addEventListener('cut', runEvent)
//cut
//taskInput.addEventListener('paste', runEvent)
//Input
taskInput.addEventListener('input', runEvent)


function runEvent(e) {
  
  //e.preventDefault();

  // Get Input value.
//  console.log(taskInput.value);

//  heading.innerText = e.target.value;
  
  console.log(`EVENT TYPE: ${e.type}`);
 // console.log(e.target.value);
}