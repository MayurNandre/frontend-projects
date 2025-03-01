let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById('textOutput');
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio('/music/sound.mp3');


//the below function will be called after pageload
const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};


const startGame = () => {
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("welcomeScreen").style.display = "none";
}

//Reload the page 
const newGameBegin = () => {
    audio.play();
    window.location.reload();
}
//New game
const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.style.display = "none";   //hides the texbox
}
//Main Logic
const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
    // check the value is low or high
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is high😲";
            userNumberUpdate.value = "";//Clear the textbox
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is low😐";
            userNumberUpdate.value = "";
        } else {
            userGuessUpdate.innerHTML = "It's Correct 😊✌️";
            userNumberUpdate.value = "";
            startNewGame();
        }
    } else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You Loose !! correct number was  ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You Loose !! correct number was  ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else {
            userGuessUpdate.innerHTML = "It's Correct 😄✌️";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }
    document.getElementById('attempts').innerHTML = userGuess.length;
};
const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
}

