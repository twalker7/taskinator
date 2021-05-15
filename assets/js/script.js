var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//function for creating new <li> and appending them, styled, to the ul tasksToDoEl
var createTaskHandler = function(){
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;


    //create list item 
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item"; 
    
    //create div to hold task info and add it to list item 
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    //add html content to div 
    taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
 
    listItemEl.appendChild(taskInfoEl);
    console.dir(listItemEl);

    // remove this?? listItemEl.textContent = taskNameInput;
//add entire list item to list 
    tasksToDoEl.appendChild(listItemEl);

}
//clicking submit or hitting enter calls the createTaskHandler function 
formEl.addEventListener("submit", createTaskHandler);

