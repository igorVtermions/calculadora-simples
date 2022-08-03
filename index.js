const vision = document.querySelector('#vision')
const vOne = document.querySelector('#vOne')
const vTwo = document.querySelector('#vTwo')
const clear = document.querySelector('#clear')

let valueOne
let valueTwo

function sum(){
    valueOne = Number(vOne.value)
    valueTwo = Number(vTwo.value)

    vision.innerHTML = valueOne + valueTwo
}

function less(){
    valueOne = Number(vOne.value)
    valueTwo = Number(vTwo.value)

    vision.innerHTML = valueOne - valueTwo
}

function mult(){
    valueOne = Number(vOne.value)
    valueTwo = Number(vTwo.value)

    vision.innerHTML = valueOne * valueTwo
}

function div(){
    valueOne = parseFloat(vOne.value)
    valueTwo = parseFloat(vTwo.value)

    vision.innerHTML = valueOne / valueTwo
}

function cl(){
    vTwo.value = "";
    vOne.value = "";
    vision.innerHTML = ""
}


clear.addEventListener('click', clear);