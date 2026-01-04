const icon = document.querySelector(".icon-share")
const img = document.querySelector(".icon-share")
const nav = document.querySelector(".navbar")
const icons = [
    "assets/images/icon-share1.svg",
    "assets/images/icon-share2.svg"
]
icon.addEventListener("click", () => {
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "flex"
        img.src = icons[1]
        icon.style.background = "var(--Desaturated-Dark-Blue)"
        img.style.padding = ".5rem"
    }else {
        nav.style.display = "none"
        img.src = icons[0]
        icon.style.background = "var(--Light-Grayish-Blue)"
        img.style.padding = "0"
    }
})