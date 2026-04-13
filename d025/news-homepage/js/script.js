const menu = document.querySelector(".menu")
const nav = document.querySelector(".navbar")
const iconMenu = document.querySelector(".icon_menu")
const html = document.querySelector("html")
const main = document.querySelector("main")

menu.addEventListener("click", () => {
    if (nav.classList.contains("nav-off")) {
        nav.classList.remove("nav-off")
        nav.classList.add("nav-on")
        iconMenu.src = "images/icon-menu-close.svg"
        html.classList.add("ligado")
        html.classList.remove("desligado")
    }else {
        nav.classList.add("nav-off")
        nav.classList.remove("nav-on")
        iconMenu.src = "images/icon-menu.svg"
        html.classList.remove("ligado")
        html.classList.add("desligado")
    }
})