const names = ["Guadalupe", "Ollie", "Aki"]
const event = "suprise"

function writeCards(names, event) {
    let writtenCards = []
    for (let i = 0; i <names.length; i++){
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    writtenCards.push(message)
}
return writtenCards
}

const number = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
function countDown(number) {
    let i = 0
    while (number >= 0) {
        console.log(number)
        number--
    }
}