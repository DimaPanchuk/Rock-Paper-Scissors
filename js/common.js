let field = document.querySelector('.game-field');
let result = document.querySelector('.game-result');
let clear = document.getElementById('clear');
let player = document.querySelector('.player')
let computer = document.querySelector('.computer')
let img1 = document.querySelector('.player-image1')
let img2 = document.querySelector('.player-image2')
const randomItems = ['Rock', 'Paper', 'Scissors'];
const images = {
    'Rock': '3c2360b8c163ca272523.png',
    'Paper': '4033bb4ae2c33629ce78.png',
    'Scissors': 'eac7805e940a774af5d5.png'
}
let roundCounter = 0;
let countWins = 0;
let countLoses = 0;

function randomGenerator () {
    return randomItems[Math.floor(Math.random() * randomItems.length)];
}


function runGame(choice1, choice2) {
    setTimeout(() => img2.setAttribute('src', images[choice2]), 400)
    if (choice1 === choice2) {
        setTimeout(() => {
            result.innerHTML += `<p>Round ${roundCounter}, ${choice1} vs. ${choice2}, It's a TIE</p>`
        }, 400)
        roundCounter++
            
    } else if (choice1 === 'Paper' && choice2 === 'Rock' ||
        choice1 === 'Rock' && choice2 === 'Scissors' ||
        choice1 === 'Scissors' && choice2 === 'Paper') {
        setTimeout(() => {
            result.innerHTML += `<p>Round ${roundCounter}, ${choice1} vs. ${choice2}, You’ve WON!</p>`
            player.innerHTML = countWins
        }, 400)
        roundCounter++
        ++countWins
        return
    } else {
        setTimeout(() => {
            result.innerHTML += `<p>Round ${roundCounter}, ${choice1} vs. ${choice2}, You’ve LOST!</p>`
            computer.innerHTML = countLoses
        }, 400)
            roundCounter++
            ++countLoses
            
        }
}

function isWinner() {
    setTimeout(function () {
        if (countWins === 3) {
            roundCounter = 1;
            countWins = 0;
            countLoses = 0;
            result.textContent = 'You are the winner!'
        } else if (countLoses === 3) {
            roundCounter = 1;
            countWins = 0;
            countLoses = 0;
            result.textContent = 'Computer is a winner'; 
        }
    }, 2000)

}

field.addEventListener('click', (e) => {
    if (e.target.className === 'buttonChoice') {
        let targetValue = e.target.getAttribute('Alt');
        img1.setAttribute('src', images[targetValue])
        runGame(targetValue, randomGenerator())
        isWinner()
    }
})

clear.addEventListener('click', () => {
    roundCounter = 0;
    countWins = 0;
    countLoses = 0;
    result.textContent = ''
    img1.setAttribute('src', '7df2c8a387d5e7ba5b47.png')
    img2.setAttribute('src', '7df2c8a387d5e7ba5b47.png')
    player.innerHTML = countWins
    computer.innerHTML = countLoses
})