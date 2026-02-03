const burgerMenu = document.querySelector(".burger_menu");
const xMark = document.querySelector(".x_mark");
const menu = document.querySelector(".burger_list");

burgerMenu.addEventListener("click", ()=> {
    menu.style.left="0";
    burgerMenu.style.display = "none";
    xMark.style.display = "block";
});

xMark.addEventListener("click", ()=> {
    menu.style.left = "-100%";
    burgerMenu.style.display = "block";
    xMark.style.display = "none";
});