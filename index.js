//Created an array of objects containing a word and its hint
//----------------------------------------------------------------------------------------------------------------------------------------------
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
    },
    {
        word: 'satire',
        hint: 'The use of irony',
    }, 
    {
        word: 'rubric',
        hint: 'A heading in manuscript',
    },
    {
        word: 'pseudonym',
        hint: 'Name used to hide identity',
    },
    {
        word: 'soliloquy',
        hint: 'An utterance to self',
    },
    {
        word: 'perusal',
        hint: 'A reading',
    },
    {
        word: 'myriad',
        hint: 'A great number',
    },
    {
        word: 'obtuse',
        hint: 'Dull',
    },
    {
        word: 'motif',
        hint: 'A reoccuring subject',
    }, 
    {
        word: 'hubris',
        hint: 'Excessive pride',
    }, 
    {
        word: 'erudite',
        hint: 'great knowledge',
    }
]
//----------------------------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------------------------------
const hint = document.querySelector('#hint')
const introPage = document.querySelector ('#input-name');
const listLetters = document.querySelector ('#list-of-letters')
const guessLetterForm = document.querySelector ('#input-letter')
document.querySelector('#enter-name').focus();
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
            document.querySelector('#letter-guessed').focus();
        } else {document.querySelector ('#intro-instruct').textContent = 'Please, can you enter a shorter name'}
    } else {document.querySelector ('#intro-instruct').textContent = 'Enter your name to play the game'}
})

//----------------------------------------------------------------------------------------------------------------------------------------------


let guessedNum = Math.floor(19*Math.random())
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

function isCompleted () {
    let count = 0
    for (let l = 0; l < arrayOfLetter.length; l++) {
        if (document.getElementById(l).textContent == "") count++
    }
    if (count>0) return false
    else return true
}

//----------------------------------------------------------------------------------------------------------------------------------------------



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
            for (let m = 0; m < arrayOfLetter.length; m++) {
                if (document.getElementById(m).textContent == "" && arrayOfLetter[m] == inputedLetter) {
                    document.querySelector ('#result').textContent = `Nice Guess, thats correct!!`
                    document.getElementById(m).textContent = inputedLetter;
                    if (!isCompleted()) {
                        return
                    }
                    else {
                        document.querySelector ('#result').textContent = `Congratulations ${playerName}, You won!!`
                        setTimeout(() => location.reload(), 3000);
                        return
                    }
                }
            }
        }
    } 
    else {
        document.querySelector ('#result').textContent = `Hey ${playerName}, you didn't enter a letter`
    }
   
})

