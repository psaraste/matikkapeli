let rand_num1 = 0
let rand_num2 = 0
let oikeat = 0
let vaarat = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
});

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = (rand_num1 + rand_num2)
    

    if (answer == correctAnswer) {
        oikeat = (oikeat + 1)
        alert("Correct!")
       
    } else {
        alert("Incorrect!")
        vaarat = (vaarat + 1)   
    }
    
    document.querySelector('#correct').innerHTML = oikeat
    document.querySelector('#incorrect').innerHTML = vaarat

    document.querySelector('input').value = '';

    randomizeNumbers()
})

