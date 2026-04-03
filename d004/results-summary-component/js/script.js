const form = document.querySelector("form")
const h2 = document.createElement("h2")
const button = document.createElement("button")
form.addEventListener("submit", (evt) => {
    evt.preventDefault()
})
button.textContent = "continue"
button.classList.add("btn")
button.setAttribute("type","submit")
h2.textContent = "Summary"
form.appendChild(h2)
fetch("data.json")
    .then(res => res.json())
    .then(dados => {
        dados.forEach((e,i) => {
            
        const cardFigures = document.createElement("div")
        const figure = document.createElement("div")
        const numbers = document.createElement("div")
        const icon = document.createElement("img")
        const category = document.createElement("strong")
        const score = document.createElement("strong")
        const span = document.createElement("span")
        
        const classCategory = `category${i}`
        const fundoCard = `card${i}`
        
        cardFigures.classList.add("card-figures")
        figure.classList.add("figure")
        numbers.classList.add("numbers")
        icon.src = e.icon
        icon.alt = e.category
        
        score.classList.add("scores")
        category.classList.add(classCategory)
        cardFigures.classList.add(fundoCard)
        span.classList.add("num")
        
        category.textContent = e.category
        score.textContent = e.score
        span.textContent = " / 100"
        
        form.appendChild(cardFigures)
        cardFigures.appendChild(figure)
        cardFigures.appendChild(numbers)
        figure.appendChild(icon)
        figure.appendChild(category)
        numbers.appendChild(score)
        numbers.appendChild(span)
        })
        form.appendChild(button)
    })