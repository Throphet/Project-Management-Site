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

    // Adding classes
    taskName.classList.add('name');
    taskDone.classList.add('done');

    // Append to document
    li.appendChild(taskName);
    li.appendChild(taskDone);
    list.appendChild(li);

});

// Hide tasks
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked == true) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
});

const searchBar = document.forms['search-tasks'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const tasksList = list.getElementsByTagName('li');
    Array.from(tasksList).forEach(function(task){
        const title = task.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
})

// Tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
});
