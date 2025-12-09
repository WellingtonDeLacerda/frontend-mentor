const card = document.querySelector("#card")

function load() {
    fetch('data.json')
     .then(response => response.json())
     .then(dados => {
         let titu3 = document.createElement("h3")
         let btn = document.createElement("button")
         btn.classList.add('btn')
         titu3.innerHTML = "Summary"
         btn.innerHTML = "Continue"
         card.appendChild(titu3)
         
         dados.forEach( (e,i) => {
             let div = document.createElement("div")
             let figure = document.createElement("div")
             let numb = document.createElement("div")
             let img = document.createElement("img")
             let span = document.createElement("span")
             let strong = document.createElement("strong")
             let numspan = document.createElement("span")
             
             let idFundo = `fundo${i+1}`
             let idCor = `cor${i+1}`
             let alt = `icone ${e.category}`
             div.classList.add("card-group")
             figure.classList.add("figure")
             numb.classList.add("numbers")
             
             div.id = idFundo
             span.id = idCor
             img.src = e.icon
             img.alt = alt
             span.innerHTML = e.category
             strong.innerHTML = e.score
             numspan.innerHTML = " / 100"
             
             card.appendChild(div)
             div.appendChild(figure)
             figure.appendChild(img)
             figure.appendChild(span)
             div.appendChild(numb)
             numb.appendChild(strong)
             numb.appendChild(numspan)
         })
         
         card.appendChild(btn)
     })
     .catch(error => {
         card.innerHTML = "Erro ao carregar json"
     })
}
load()