const header = document.querySelector(".header");
const burger = header.querySelector(".burger-menu");
const burgerIcon = header.querySelector(".burger-menu__icon");
const navBarMobile = document.querySelector(".nav_bar");

burger.addEventListener("click", function() {
    navBarMobile.classList.toggle("header--mobile");

    if (navBarMobile.classList.contains("header--mobile")) {
        burgerIcon.src = "/assets/images/burger-menu-close.svg"; 
    } else {
        burgerIcon.src = "/assets/images/burger-menu.svg"; 
    }
});