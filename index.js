const introPage = document.querySelector ('#input-name');
introPage.addEventListener ('submit', (e) => {
    e.preventDefault();  
    document.querySelector ('#start-Page').classList.add('hide-page')
    document.querySelector ('#gamePage').classList.remove('hide-page')
    document.querySelector ('#welcome-note').textContent = `WELCOME, ${e.target.querySelector('#enter-name').value.toUpperCase()}`

})
