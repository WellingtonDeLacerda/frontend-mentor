const form = document.querySelector("form")
const erroBox = form.querySelectorAll(".erro-box")
const erroInput = form.querySelectorAll("input")
const firstBoxes = form.querySelectorAll(".first-boxes")
const firstTxts = form.querySelectorAll(".first-txts")
const queryRadios = form.querySelectorAll(".box-radios input")
const inputRadios =  form.querySelectorAll(".input-box input")
const labelRadios = form.querySelectorAll(".box-radios .input-radio")
const boxRadios = form.querySelector(".query .erro-off")
const boxFocus = form.querySelectorAll(".query .input-box")
const textArea = form.querySelector("textarea")
const message = form.querySelector(".box-message .erro-off")
const checkBox = form.querySelector(".custom-checkbox .erro-off")
const inputCheck = form.querySelector(".custom-checkbox input")
const labelCheck = form.querySelector(".custom-checkbox .input-checkbox")
const aviseSuccess = form.querySelector(".avise-success")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let isActive = true 
    let index = 0
    for(let i = 0; i < erroBox.length; i++) {
        
        if (erroInput[i].type === "text" || erroInput[i].type === "email") {
            
            if (erroInput[i].value.trim() === "") {
                console.log(erroInput[i].name + " vazio")
                firstTxts[i].classList.add("erro-on")
                firstTxts[i].classList.remove("erro-off")
                firstBoxes[index].classList.add("erro-active")
                firstBoxes[index].classList.remove("erro-deactived")
                firstTxts[i].innerText = "This field is required"
                isActive = false
            }else {
                  firstTxts[i].classList.add("erro-off")
                firstTxts[i].classList.remove("erro-on")
                firstBoxes[index].classList.remove("erro-active")
                firstBoxes[index].classList.add("erro-deactived")
                
                 if (erroInput[i].type === "email") {
                     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                     
                     if (!regex.test(erroInput[i].value)) {
                         console.log("Email ivalido")
                         firstTxts[i].classList.add("erro-on")
                firstTxts[i].classList.remove("erro-off")
                firstBoxes[index].classList.add("erro-active")
                firstBoxes[index].classList.remove("erro-deactived")
                         firstTxts[i].innerText = "Please enter a valid email address"
                         isActive = false
                     }
                 }
            }
        }
        /* continuar com outros inputs */
        if (erroInput[i].type === "radio") {
            if (!queryRadios[0].checked && !queryRadios[1].checked) {
                console.log(inputRadios[index].value + " vazio")
                boxRadios.classList.add("erro-on")
                boxRadios.classList.remove("erro-off")
                isActive = false
            }else {
                boxRadios.classList.remove("erro-on")
                boxRadios.classList.add("erro-off")
                // aqui vou focar em criar a lógica do input radio
                if (inputRadios[index].checked) {
                    console.log(inputRadios[index].value)
                    
                }
            }
        }
        if (textArea && index == 4) {
            if (textArea.value == "") {
                console.log("Escreva uma mensagem")
                textArea.classList.remove("erro-deactived")
                textArea.classList.add("erro-active")
                message.classList.remove("erro-off")
                message.classList.add("erro-on")
                isActive = false
            }else {
                textArea.classList.add("erro-deactived")
                textArea.classList.remove("erro-active")
                message.classList.remove("erro-on")
                message.classList.add("erro-off")
            }
        }
        if (erroInput[i].type === "checkbox") {
            if (!erroInput[i].checked) {
                console.log("Concorde com nossos termos")
                checkBox.classList.add("erro-on")
                checkBox.classList.remove("erro-off")
                isActive = false
            }else {
                checkBox.classList.remove("erro-on")
                checkBox.classList.add("erro-off")
            }
        }
        index++
    }  
    if (!isActive) return
    else {
        console.log("tudo ok")
        setTimeout(() => {
            aviseSuccess.classList.add("avise-off")
            aviseSuccess.classList.remove("avise-on")
        },2000)
        aviseSuccess.classList.add("avise-on")
            aviseSuccess.classList.remove("avise-off")
        form.reset()
        labelRadios.forEach((label,bf) => {
            label.classList.add("radio-off")
            label.classList.remove("radio-on")
            boxFocus[bf].classList.remove("radio-focus")
        })
        labelCheck.classList.add("checkbox-off")
        labelCheck.classList.remove("checkbox-on")
    }
})
queryRadios.forEach((radio,irad) => {
    radio.addEventListener("change", () => {
        labelRadios.forEach((label,bf) => {
            label.classList.add("radio-off")
            label.classList.remove("radio-on")
            boxFocus[bf].classList.remove("radio-focus")
        })
        if (radio.checked) {
            labelRadios[irad].classList.add("radio-on")
        labelRadios[irad].classList.remove("radio-off")
        boxFocus[irad].classList.add("radio-focus")
        }
    })
    
})
inputCheck.addEventListener("change", () => {
    if (inputCheck.checked) {
        labelCheck.classList.add("checkbox-on")
        labelCheck.classList.remove("checkbox-off")
    }else {
        labelCheck.classList.add("checkbox-off")
        labelCheck.classList.remove("checkbox-on")
    }
})
firstBoxes.forEach((focus,i) => {
    const input = focus.querySelector("input")
    input.addEventListener("focus", () => {
        focus.classList.remove("erro-deactived")
        focus.classList.add("focus-box")
        if (focus.classList.contains('erro-active')) {
            focus.classList.remove("focus-box")
        }
    })
    input.addEventListener("blur", () => {
        focus.classList.remove("focus-box")
        focus.classList.add("erro-deactived")
        if (focus.classList.contains('erro-active')) {
            focus.classList.remove("erro-deactived")
        }
    })
})