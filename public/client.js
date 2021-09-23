const $name = document.getElementById('fullName')
const $cards = document.querySelectorAll('div.card')
$cards.forEach((card)=>{
    card.onclick = makeGuess
})

function makeGuess() {
    fetch('/guess?fullName=John&color=blue')
}