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
    console.log(value);
});
