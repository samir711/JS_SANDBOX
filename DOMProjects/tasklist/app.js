//Define UI Vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all even listeners

loadEventListeners();

//Load all even listeners
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener("DOMContentLoaded", getTasks);
  //Add task event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  //Clear task event
  clearBtn.addEventListener("click", clearTask);
  //Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

//Get Tasks from LS

function getTasks() {
  console.log("DOM fully loaded and parsed");
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    //Create li element

    const li = document.createElement('li');
    
    //Add Class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(task));
    //Create new link elment
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class= "fa fa-remove"></li>';
    //Append the link to li
    li.appendChild(link);
    // Append li to ul

    taskList.appendChild(li);
  });
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //Create li element
  const li = document.createElement("li");
  li.className = "collection-item";
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link elment
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  //Add icon html
  link.innerHTML = '<i class= "fa fa-remove"></li>';
  //Append the link to li
  li.appendChild(link);

  // Append li to ul

  taskList.appendChild(li);

  //Store in Local Storage
  storeTaskInLocalStorage(taskInput.value);

  //Clear input
  taskInput.value = "";

  e.preventDefault();
}

// Store Task

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you Sure ?")) {
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalStrorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove From Local Storage

function removeTaskFromLocalStrorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {

    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Clear Task
function clearTask() {
  // taskList.innerHTML = '';

  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstElementChild);
  }
// Clear from Local Storage
  clearTasksFromLocalStorage();  

}

// Clear Tasks from Local Storage

function clearTasksFromLocalStorage() {

  localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });

  console.log(text);
}
