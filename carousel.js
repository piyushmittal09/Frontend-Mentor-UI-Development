let btnLeft = document.querySelector(".prev");
let btnRight = document.querySelector(".next");
let container1 = document.querySelector(".slideshow-container-1");
let container2 = document.querySelector(".slideshow-container-2");





function slideLeft() {

    container1.style.transform = "translateX(-130%)";
    container1.style.transition = "all 1s ease-in-out";
    container2.style.transform = "translateX(-107%)";
    container2.style.transition = "all 1s ease-in-out";
    
    
   
}

function slideRight() {
    container1.style.transform = "translateX(0%)";
    container1.style.transition = "all 1s ease-in-out";
    container2.style.transform = "translateX(0%)";
    container2.style.transition = "all 1s ease-in-out";
    
}

