const words = [
    {
        word: 'home',
        hint: 'A place we live',
    }, 
    {
        word: 'school',
        hint: 'where we learn',
    },
    {
        word: 'marriage',
        hint: 'A union of two people',
    },
    {
        word: 'java',
        hint: 'A programming language',
    },
    {
        word: 'lexus',
        hint: 'A brand of automobile',
    },
    {
        word: 'scissors',
        hint: 'Used to cut soft materials',
    },
    {
        word: 'venus',
        hint: 'A planet',
    },
    {
        word: 'diamond',
        hint: 'An precious stone',
    }, 
    {
        word: 'answer',
        hint: 'A reply to question',
    }, 
    {
        word: 'cloth',
        hint: 'What we put on',
    }
]
//----------------------------------------------------------------------------------------------------------------------------------------------

const hint = document.querySelector('#hint')
const introPage = document.querySelector ('#input-name');
const listLetters = document.querySelector ('#list-of-letters')
const guessLetterForm = document.querySelector ('#input-letter')
let playerName = ''; let tries = 5;

//----------------------------------------------------------------------------------------------------------------------------------------------

introPage.addEventListener ('submit', (e) => {
    e.preventDefault(); 
    if (e.target.querySelector('#enter-name').value !== '') {
        if (e.target.querySelector('#enter-name').value.length <= 13) {
            playerName = e.target.querySelector('#enter-name').value.toUpperCase()
            document.querySelector ('#start-Page').classList.add('hide-page')
            document.querySelector ('#gamePage').classList.remove('hide-page')
            document.querySelector ('#welcome-note').textContent = `WELCOME, ${playerName}!!`
            document.querySelector ('#result').textContent = `Hey ${playerName}, can you guess the word?`
        } else {document.querySelector ('#intro-instruct').textContent = 'Please, can you enter a shorter name'}
    } else {document.querySelector ('#intro-instruct').textContent = 'Enter your name to play the game'}
})

//----------------------------------------------------------------------------------------------------------------------------------------------


let guessedNum = Math.floor(9*Math.random())
let currentWord = words[guessedNum]
hint.textContent = `Hint: ${currentWord.hint}`
const arrayOfLetter = currentWord.word.split('')

for (let i = 0; i < currentWord.word.length; i++) {
    let currentLetter = document.createElement('li')
    currentLetter.id = i;
    listLetters.append (currentLetter)
}


for (let j = 0; j < Math.round(0.7*currentWord.word.length); j++) {
    let letterSelector = Math.floor ((currentWord.word.length-1) * Math.random())
    document.getElementById(letterSelector).textContent = arrayOfLetter[letterSelector]
}

//----------------------------------------------------------------------------------------------------------------------------------------------

function checkIfLetterPresent (char) {
    for (let a = 0; a < arrayOfLetter.length; a++) {
        if (document.getElementById(a).textContent == char) return true
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------



guessLetterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputedLetter = e.target.querySelector('#letter-guessed').value;
    guessLetterForm.reset()
    if (inputedLetter != '') {
        if (tries == 1) {document.querySelector ('#result').textContent = `Game Over!!`;
        setTimeout(() => location.reload(), 2000);
        return
    }
        if (arrayOfLetter.indexOf(inputedLetter) === -1){
            tries--;
            document.querySelector ('#result').textContent = `Wrong Guess, you have ${tries} more chances`
        }
        else {
            // if (checkIfLetterPresent(inputedLetter)) {
            //     document.querySelector ('#result').textContent = `Sorry, that already exists`
            // } else {
                document.querySelector ('#result').textContent = `Nice Guess, thats correct!!`
                document.getElementById(arrayOfLetter.indexOf(inputedLetter)).textContent = inputedLetter
            // }
        }
    } 
    else {
        document.querySelector ('#result').textContent = `Hey ${playerName}, you didn't enter a letter`
    }
   
})

