var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//function for creating new <li> and appending them, styled, to the ul tasksToDoEl
var createTaskHandler = function(){
    event.preventDefault();
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "this is a new task";
    tasksToDoEl.appendChild(listItemEl);

}
//clicking submit or hitting enter calls the createTaskHandler function 
formEl.addEventListener("submit", createTaskHandler);

