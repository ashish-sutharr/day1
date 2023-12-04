function addTask(){
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if(taskInput.value !== ""){
        var li = document.createElement("li");
        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        taskText.classList.add("task-text");
        li.appendChild(taskText);

        var completeButton = document.createElement("input");
        completeButton.type = "checkbox";
        completeButton.onclick = function(){
            taskText.classList.toggle("completed");
        }
        li.appendChild(completeButton);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick =function(){
            taskList.removeChild(li);
        }
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
        
    }else{
        alert("Please enter a task!");
    }
}