const taskList = document.querySelector('#management');

console.log(taskList.nextSibling);
console.log(taskList.nextElementSibling);

console.log(taskList.previousSibling);
console.log(taskList.previousElementSibling);

taskList.previousElementSibling.querySelector("h1").innerHTML += "<br /> Private";
