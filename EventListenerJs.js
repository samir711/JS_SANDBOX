// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
  
//   console.log('Hello World');
//   e.preventDefault();

// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

//document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

function onClick(e) {
  //console.log('Clicked');
  e.preventDefault();
  let val; 
  val = e;
  
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  //e.target.innerText = 'Hello';

  // Event type
  val = e.type;

  // Timestap
  val = e.timeStamp;

  // Coords even relative to the window

  val = e.clientY;

  val = e.clientX;

  // Coords event relative to the element

  val = e.offsetY;
  val = e.offsetX;
  
  console.log(val);




};