

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultsDisplay = document.getElementById('results');

/* querySelectorAll devuelve una NodeList estática (no viva) que representa una lista de elementos del 
documento que coinciden con el grupo de selectores indicados.*/

const possibleChoices = document.querySelectorAll('button');

let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
   //E o event es el comando que nos permite acceder a la propiedad target de un objeto event.
   //Aqui se guardan las decisiones del usuario
   userChoice = e.target.id
   //Con esto recuperamos la info de userChoice
   userChoiceDisplay.innerHTML= userChoice
   //Funcion que genera la eleccion del ordenador
   generarComputerChoice()
   getResults()
}))

function generarComputerChoice(){
    //Math. floor() es un método del objeto estándar Math que redondea un número dado hacia el número entero anterior.
    const randomNumber = Math.floor(Math.random() * 3) + 1 //o possibleChoices.length + 1
    
    // === significa deeply equals

    if(randomNumber === 1){
        computerChoice = 'Piedra'
    }
    if(randomNumber === 2){
        computerChoice = 'Tijeras'
    }
    if(randomNumber === 3){
        computerChoice = 'Papel'
    }
    computerChoiceDisplay.innerHTML= computerChoice
}

function getResults (){
    if (computerChoice===userChoice){
        result = 'Empate!'
    }

    if (computerChoice=== 'Piedra' && userChoice === 'Papel'){
        result = 'Ganas!'
    }

    if (computerChoice=== 'Piedra' && userChoice === 'Tijeras'){
        result = 'Pierdes!'
    }

    if (computerChoice=== 'Papel' && userChoice === 'Tijeras'){
        result = 'Ganas!'
    }

    if (computerChoice=== 'Papel' && userChoice === 'Piedra'){
        result = 'Pierdes!'
    }

    if (computerChoice=== 'Tijeras' && userChoice === 'Piedra'){
        result = 'Ganas!'
    }
    if (computerChoice=== 'Tijeras' && userChoice === 'Papel'){
        result = 'Pierdes!'
    }
    resultsDisplay.innerHTML=result
}