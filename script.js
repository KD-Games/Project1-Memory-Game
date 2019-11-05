
let cards = document.querySelectorAll('.innercard');
let lockBoard = false;

let hasFlippedCard = false;
let firstCard, secondCard;


//let score = 10;
let scoreFinal = 12;


let scoreField = document.getElementById('score');
let scoreFieldPopup = document.getElementById('score-pop');

// scoreField.innerText = score; 
// scoreFieldPopup.innerText = score; 

let congratulationsPop = document.getElementById("popup1");
let gameOverPop = document.getElementById("popup2");
let closeicon = document.querySelector(".close");
let matchedCard = document.getElementsByClassName("match");

if(window.location.href.includes('ch1-Animals')){ //first page
     console.log('looking at local storage')
     console.log(sessionStorage)
    sessionStorage.setItem('score', 10);
}
// if(window.location.href.includes('ch2-Disney.html')){ //first page
//     console.log(sessionStorage)
//     sessionStorage.setItem('score', 10);
// }

if(window.location.href.includes('ad1-Netflix')){ //first page
    sessionStorage.setItem('score', 20);
}

let score; 
function getScore() {
    score = sessionStorage.getItem('score');
    console.log(score);
    score = Number(score); //+ 10;  //When i get to a new page i add ten to the score 
    console.log(score);
    setScore() 
}

function setScore(){  //show score and save score to sessionStorage 
    scoreField.innerText = score;
    scoreFieldPopup.innerText = score;
    sessionStorage.setItem('score', score);
}
getScore();

let nextLevelButton = document.querySelector("#next-level");


if(nextLevelButton){
    nextLevelButton.addEventListener('click', savedScore);
}

function savedScore (){
    score = sessionStorage.getItem('score');
    score = Number(score) + scoreFinal;
    setScore();
}

function reloadScore (){
    // score = 10;
    // setScore();
    sessionStorage.setItem('score', 10);
    // in this function you set score = 10
    // and then call seScore but the setScore function will not see that you set it = 10 its in a different scope
    // just re-write this function here to directly set the score in the sessionStorage to 10
}


//Initial Timer 

let firstTimer = 4;
let initialTimer = setInterval(function () {

    document.getElementById("countdown").innerHTML = firstTimer;
    firstTimer -= 1;
    if (firstTimer <= -1) {
        clearInterval(initialTimer);
        document.getElementById("countdown").innerHTML = "GO!";

        gameTimer(); // after initial timer ends, starts Game timer

    }
}, 1000);

//Game Timer

let timeLeft = 20;

function gameTimer() {
    let beginTimer = setInterval(function () {
        let countdown = document.getElementById("countdown");
        countdown.innerHTML = timeLeft;
        timeLeft -= 1;
        if (timeLeft <= -1 || score < 0 || matchedCard.length == cards.length) {
            clearInterval(beginTimer);
        }
        if (timeLeft < 0) {
            countdown.style.backgroundColor = "red";
            countdown.style.color = "black";
            let goT = document.getElementById("game-over-time");
            goT.style.visibility = "visible";
            gameOverPop.classList.add("show");
            // sessionStorage.clear();
            // why do you clear the whole storage when you get it wromg?
            // shouldnt you just subtract 10 here?
            reloadScore();
            // but reload score does not subtract 10
            // it sets it equal to 10 even if you have 500
        }
    }, 1000);
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

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    firstCard.parentElement.classList.add('x');
    secondCard.parentElement.classList.add('x');
    firstCard.classList.add('match');
    secondCard.classList.add('match');

    resetBoard();
}


function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
    score -= 5;
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
    // i think this is where you should add to the score because this is the moment when the user accomplishes the goal
    if (matchedCard.length == cards.length) {
        //show congratulations congratulationsPop
        congratulationsPop.classList.add("show");
    };
}

function goBack() {
    window.history.back();
}



initialFlip();
flipBack();


function gameOver() {
    
    if (score < 0) {
        let goS = document.getElementById("game-over-score");
        goS.style.visibility = "visible";
        gameOverPop.classList.add("show");
        sessionStorage.clear();
    };
}



console.log('this is at the bottom of the file lets see if we see this or if the error is preventing the file from getting this far')


cards.forEach(card => {

    card.addEventListener('click', flipCard);
    card.addEventListener("click", congratulations);
    card.addEventListener("click", gameOver);
});