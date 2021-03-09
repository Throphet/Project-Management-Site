const list = document.querySelector("#management ul");

// Setting tasks to done / deleting tasks
list.addEventListener("click", function(e){
    if(e.target.className == 'done'){
        const li = e.target.parentElement;
        list.removeChild(li);
    } 
});

// Adding tasks
const addForm = document.forms['add-todo'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    // Create elements
    const li = document.createElement('li');
    const taskName = document.createElement('span');
    const taskDone = document.createElement('span');

    // Add content
    taskDone.textContent = "✓";
    taskName.textContent = value;

    // Append to document
    li.appendChild(taskName);
    li.appendChild(taskDone);
    list.appendChild(li);

});


