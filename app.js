tasks = document.querySelectorAll("#management li .name");

Array.from(tasks).forEach(function(task){
    task.textContent += " test";
})

const taskList = document.querySelector("#management");
// taskList.innerHTML = "<h2>no tasks left?</h2>";
taskList.innerHTML += "<h2>no tasks left</h2>";