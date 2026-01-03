const img = document.querySelectorAll(".icon")
const p = document.querySelectorAll("p")
const icons = [
    "assets/images/icon-plus.svg",
    "assets/images/icon-minus.svg"
]
img.forEach( (i,c) => {
    i.addEventListener("click", () => {
        if (p[c].classList != "on") {
            i.src = icons[1]
            i.alt = "icon-minus"
        }else {
            i.src = icons[0]
            i.alt = "icon-plus"
        }
        p[c].classList.toggle("on")
    })
})