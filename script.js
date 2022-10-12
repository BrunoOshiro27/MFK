let firstSlide = document.getElementById("first-slide")
let secondSlide = document.getElementById("second-slide")

let cakeListOne = [
    {
        sabor : "creme belga com morango"
    },
    {
        sabor : "ganache com morango"
    },
    {
        sabor : "limão"
    },
    {
        sabor : "dois amores"
    },
]

let cakeHtmlOne = ""

for(let cake of cakeListOne){
    cakeHtmlOne += `
    <div>
        <img src="./image/${cake.sabor}.png" alt="${cake.sabor}">
        <p>${cake.sabor}</p>
        <p><b>7 R$</b></p> 
    </div>
    `
}

firstSlide.innerHTML = cakeHtmlOne


/* for the second slide */

let cakeHtmlTwo = ""

let cakeListTwo = [
    {
        sabor : "maracuja"
    },
    {
        sabor : "ninho com morango"
    },
    {
        sabor : "ninho trufado"
    },
    {
        sabor : "prestigio"
    },
]


for(let cake of cakeListOne){
    cakeHtmlTwo += `
    <div>
        <img src="./image/${cake.sabor}.png" alt="${cake.sabor}">
        <p>${cake.sabor}</p>
        <p><b>7 R$</b></p> 
    </div>
    `
}

secondSlide.innerHTML = cakeHtmlTwo






