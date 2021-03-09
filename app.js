let buttons = document.querySelectorAll('#management .done');

Array.from(buttons).forEach(function(btn){
    btn.addEventListener("click", function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    })
})

const link = document.querySelector("#page-banner");
link.addEventListener("click", function(e){
    e.preventDefault();
    console.log("navigation to: ", e.target.textContent);
})
