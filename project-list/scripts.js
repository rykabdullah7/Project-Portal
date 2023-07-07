const hideButtons = document.getElementsByClassName("hid");
Array.from(hideButtons).forEach((button) => {
    button.addEventListener('click',() => {
        const element = button.parentNode;
        element.style.display = 'none';
    } )
})

const unhideButtons = document.getElementById("unhide");
unhideButtons.addEventListener("click", () => {
    Array.from(hideButtons).forEach((button) =>{
        const element = button.parentNode;
        element.style.display = 'block';
    })
})

const stars = document.getElementsByClassName("hov");
Array.from(stars).forEach((star)=> {
    star.addEventListener('click', () =>{
        const element = star.firstChild;
        (element.style.color == "goldenrod")? (element.style.color= "white"): (element.style.color="goldenrod");
        star.classList.remove("hov");
    })
})
