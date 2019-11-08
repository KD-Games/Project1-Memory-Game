
let cards = document.querySelectorAll('.innercard');
let lockBoard = false;

let hasFlippedCard = false;
let firstCard, secondCard;

//Sound effects
let gameOverSound = new Audio("sounds/game_over.mp3");
let noMatchSound = new Audio("sounds/incorrect.mp3");
let victorySound = new Audio("sounds/victory.mp3");
let finalVictory = new Audio("sounds/happy.mp3");

let animailSound = new Audio("sounds/animal.mp3");
let disneySound = new Audio("sounds/disney.mp3");
let toySound = new Audio("sounds/toys.mp3");



let scoreFinal = 10;
let timeFinal = 20;
let chscore; 
let chtimeLeft; 

let chscoreField = document.getElementById('ch-score');
let chscoreFieldPopup = document.getElementById('ch-score-pop');
let chtimeFieldPopup = document.getElementById('ch-time-pop');


let congratulationsPop = document.getElementById("popup1");
let gameOverPop = document.getElementById("popup2");
let closeicon = document.querySelector(".close");
let matchedCard = document.getElementsByClassName("match");



if(window.location.href.includes('ch1-Animals')){ //first page
    sessionStorage.setItem('ch-score', 10);
    sessionStorage.setItem('ch-timeLeft', 30);
}


function getScore() {
    chscore = sessionStorage.getItem('ch-score');
    chscore = Number(chscore);
    setScore(); 
}

function setScore(){  //show score and save score to sessionStorage 
    chscoreField.innerText = chscore;
    chscoreFieldPopup.innerText = chscore;
    sessionStorage.setItem('ch-score', chscore);
}
getScore();

let nextLevelButton = document.querySelector("#next-level");


if(nextLevelButton){
    nextLevelButton.addEventListener('click', savedScore);
    nextLevelButton.addEventListener('click', savedTimeLeft);
}

function savedScore (){
    chscore = sessionStorage.getItem('ch-score');
    chscore = Number(chscore) + scoreFinal;
    setScore();
}

function reloadScore (){
    sessionStorage.setItem('ch-score', 10);
}

//Initial Timer 

let firstTimer = 4;
let initialTimer = setInterval(function () {

    document.getElementById("countdown").innerHTML = firstTimer;
    firstTimer -= 1;
    if (firstTimer <= -1) {
        clearInterval(initialTimer);
        document.getElementById("countdown").innerHTML = "GO!";

        getTimeLeft(); // after initial timer ends, starts Game timer

    }
}, 1000);

console.log("Child score? " + chscore);


function getTimeLeft() {
    chtimeLeft = sessionStorage.getItem('ch-timeLeft');
    chtimeLeft = Number(chtimeLeft); //+ 10;  //When i get to a new page i add ten to the score 
    gameTimer();
    // setTimeLeft();
}
function setTimeLeft(){  //save time to sessionStorage 
    countdown.innerText = chtimeLeft;
    sessionStorage.setItem('ch-timeLeft', chtimeLeft);
}
function savedTimeLeft (){
    chtimeLeft = sessionStorage.getItem('ch-timeLeft');
    chtimeLeft = Number(chtimeLeft) + timeFinal;
    setTimeLeft();
}
function savedTimeLeftBoard (){
    chtimeLeft = sessionStorage.getItem('ch-timeLeft');
    chtimeLeft = Number(chtimeLeft);
    setTimeLeft();
}
function reloadTime (){
    sessionStorage.setItem('ch-timeLeft', 20);
}

//Game Timer

function gameTimer() {
    let beginTimer = setInterval(function () {
        let countdown = document.getElementById("countdown");
        countdown.innerHTML = chtimeLeft;
        chtimeLeft -= 1;
        
        if(matchedCard.length == cards.length){ //stop the timer when you win
            chtimeFieldPopup.innerText = chtimeLeft +" seconds.";
            clearInterval(beginTimer);
            setTimeLeft();
            //sessionStorage.setItem('timeLeft', timeLeft);
        }
        if (chtimeLeft <= -1 || chscore < 0) {
            clearInterval(beginTimer);
        }
        if (chtimeLeft < 0) {
            gameOverSound.play();
            countdown.style.backgroundColor = "red";
            countdown.style.color = "black";
            let goT = document.getElementById("game-over-time");
            goT.style.visibility = "visible";
            gameOverPop.classList.add("show");
            // sessionStorage.clear();
            reloadScore();  // Reload score when you run out of time and clicked on Try Again button
            reloadTime(); // Reload time when you run out of time and clicked on Try Again button
        }
    }, 1000);
}
// get time for scoreboard localSession 
let scoreboardButton = document.querySelector("#ch-score-board");
if(scoreboardButton){
    scoreboardButton.addEventListener('click', savedTimeLeftBoard);
}


// //Initial flip so the player can view all the cards and memorize


function initialFlip() {
    setTimeout(loadFlip, 800);

}

function loadFlip() {

    cards.forEach(card => {
        card.classList.add('flip');
        card.classList.add('avoid-clicks');
    });
}

// //Player has 8 seconds to view the cards, 
// //below we're making all the cards face back again

function flipBack() {
    setTimeout(loadAnotherFlip, 5000);

}

function loadAnotherFlip() {
    cards.forEach(card => {
        card.classList.remove('flip');
        card.classList.remove('avoid-clicks');
    });
}
////////////////////////////////////////////////////////////

function flipCard() {

    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.parentElement.dataset.framework === secondCard.parentElement.dataset.framework;

    isMatch ? disableCards() : unflipCards();

}



function disableCards() {
if(window.location.href.includes('ch1-Animals')){
animailSound.play();
}
if(window.location.href.includes('ch2-Disney')){
    disneySound.play();
}
if(window.location.href.includes('ch3-Toys')){
    toySound.play();
}

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    firstCard.parentElement.style.filter = "blur(5px)"; // adds filter effect to 1st
    secondCard.parentElement.style.filter = "blur(5px)"; // and 2nd card matched
    firstCard.classList.add('match');
    secondCard.classList.add('match');

    resetBoard();
}



function unflipCards() {
    noMatchSound.play();
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
    chscore -= 5;
    setScore()
}


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * cards.length);
        card.parentElement.style.order = randomPos;
    });
})();

function congratulations() {
if (matchedCard.length == cards.length) {
//show congratulations congratulationsPop
setTimeout(function(){ 
if(window.location.href.includes("ch3-Toys")){
   finalVictory.play();
   finalVictory.loop = true;
}else{
    victorySound.play();
}
    
    congratulationsPop.classList.add("show");
}, 800);
       }
}

function goBack() {
    window.history.back();
}


initialFlip();
flipBack();


function gameOver() {
   
    if (chscore < 0) {
        let goS = document.getElementById("game-over-score");
        gameOverSound.play();
        goS.style.visibility = "visible";
        gameOverPop.classList.add("show");
        sessionStorage.clear();
    };
}

let tryAgainBtn = document.querySelector("#try-again");
tryAgainBtn.addEventListener('click', tryAgain);

function tryAgain(){
   reloadScore();
   reloadTime(); 

}



cards.forEach(card => {

    card.addEventListener('click', flipCard);
    card.addEventListener("click", congratulations);
    card.addEventListener("click", gameOver);
});