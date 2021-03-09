const list = document.querySelector("#management ul");

// Setting tasks to done / deleting tasks
list.addEventListener("click", function(e){
    if(e.target.className == 'done'){
        const li = e.target.parentElement;
        list.removeChild(li);
    } 
});