
document.addEventListener("DOMContentLoaded",function(){
    const hideButtons = document.getElementsByClassName("hid");
Array.from(hideButtons).forEach((button) => {
    button.addEventListener('click', () => {  
        console.log("hi");
        const element = button.parentNode;
        const starColor = element.querySelector(".hov > span").style.color;
        if (starColor !== "rgb(218, 165, 32)") {
        element.style.display = "none";
    }
    })
})

const unhideButtons = document.getElementById("unhide");
if(unhideButtons){
unhideButtons.addEventListener("click", () => {
    Array.from(hideButtons).forEach((button) => {
        const element = button.parentNode;
        element.style.display = 'block';
    })
})
}

const stars = document.getElementsByClassName("hov");
Array.from(stars).forEach((star) => {
    star.addEventListener('click', () => {
        const element = star.firstChild;
        if(element.style.color !== "rgb(218, 165, 32)"){
            element.style.color = "rgb(218, 165, 32)";
            star.classList.remove("hov");
        }
        else{
            element.style.color = "rgb(255, 255, 255)";
            star.classList.add("hov");
        }
        
    })
})

})
