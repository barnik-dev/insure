const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const navLink = document.querySelector(".nav-links");

menuOpen.addEventListener("click", function () {
    navLink.style.maxHeight = "500px";
    menuOpen.style.display = "none";
    menuClose.style.display = "block"
});

menuClose.addEventListener("click", function () {
    navLink.style.maxHeight = "0";
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
});
