const wmf = document.querySelector("#management li:nth-child(2) .name");
//console.log(wmf);

let tasks = document.querySelector("#management li .name");
// console.log(tasks);

tasks = document.querySelectorAll("#management li .name");
// console.log(tasks);

Array.from(tasks).forEach(function(task) {
    console.log(task);
})