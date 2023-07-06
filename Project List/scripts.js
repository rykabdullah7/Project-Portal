const hide_buttons = document.getElementsByClassName("hid");
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

const stars = document.getElementsByClassName("hov");
Array.from(stars).forEach((star)=> {
    star.addEventListener('click', () =>{
        const element = star.firstChild;
        (element.style.color == "goldenrod")? (element.style.color= "white"): (element.style.color="goldenrod");
    })
})
