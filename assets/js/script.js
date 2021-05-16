var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//function for creating new <li> and appending them, styled, to the ul tasksToDoEl
var taskFormHandler = function(event){
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value; // these 2 variables are local and cant be directly accessed by createTaskEl

    if(!taskNameInput || !taskTypeInput){
        alert("You need to fill out the task form!");
        return false;
    }
    //create object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    //send it as an argument to createTaskEl and call the function 
    createTaskEl(taskDataObj);
    //reset the entire <form> element with the id formEl (method for form elements only)
    formEl.reset();
}
var createTaskEl = function(taskDataObj){
    //create list item 

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item"; 

    //create div to hold task info and add it to list item 
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    //add html content to div 
    taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
 
    listItemEl.appendChild(taskInfoEl);
    console.dir(listItemEl);

//add entire list item to list 
    tasksToDoEl.appendChild(listItemEl);
   
}
//clicking submit or hitting enter calls the createTaskHandler function 
formEl.addEventListener("submit", taskFormHandler);

