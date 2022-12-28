let Score = document.getElementById("score-el")
let guestScore = document.getElementById("guest-score-el")
//pull in the HTML element using its ID 

let count = 0
let gcount = 0
//set count to home and guest to zero

//define function to add 1, 2 or 3 to score board for home
function add1(){
    count += 1
    Score.textContent = count
}

function add2(){
    count += 2
    Score.textContent = count
}

function add3(){
    count += 3
    Score.textContent = count
}

//define functions to add 1, 2 or 3 to score board for guest
function gadd1(){
    gcount += 1
    guestScore.textContent = gcount
}
function gadd2(){
    gcount += 2
    guestScore.textContent = gcount
}
function gadd3(){
    gcount += 3
    guestScore.textContent = gcount
}