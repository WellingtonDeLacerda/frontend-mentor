const btn = document.querySelector(".btn")
const email = document.querySelector("#mail")
const res = document.querySelector(".res")
const erro = document.querySelector("#icon-error")

btn.addEventListener("click", () => {
    if (email.value.length === 0) {
        // caixa vazia
        res.innerHTML = "Fill in the data"
    }else {
        if (email.value.includes("@email.com") || email.value.includes("@gmail.com")) {
            // have a @
            res.innerHTML = ""
            erro.classList.remove("error")
            erro.classList.add("semError")
            email.style.border =
             "2px solid var(--pink400)"
        }else {
            res.innerHTML = "Please provid a valid email"
            erro.classList.remove("semError")
            erro.classList.add("error")
            email.style.border = "2px solid var(--red500)"
        }
    }
})