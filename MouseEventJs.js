const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
//clearBtn.addEventListener('click', runEvent)

// DoubleClick
//clearBtn.addEventListener('dblclick', runEvent)

// Mousedown
//clearBtn.addEventListener('mousedown', runEvent)

// MouseUp
//clearBtn.addEventListener('mouseup', runEvent)

// Mouse Enter
//clearBtn.addEventListener('mouseenter', runEvent);

// Mouse leave
//clearBtn.addEventListener('mouseleave', runEvent)

// Mouse over
// clearBtn.addEventListener('mouseover', runEvent);

// Mouse out
//clearBtn.addEventListener('mouseout', runEvent)

//Move Move
card.addEventListener('mousemove',runEvent)

//Event Handler

function runEvent(e) {
  e.preventDefault();
  console.log(`EVENT TYPE: ${e.type} `);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY} `;
  //document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;


}