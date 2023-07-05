const hide_buttons = document.getElementsByClassName("btn");
Array.from(hide_buttons).forEach((button) => {
    button.addEventListener('click',() => {
        const element = button.parentNode;
        element.style.display = 'none';
    } )
})

const unhid = document.getElementById("unhide");
unhid.addEventListener("click", () => {
    Array.from(hide_buttons).forEach((button) =>{
        const element = button.parentNode;
        element.style.display = 'block';
    })
})