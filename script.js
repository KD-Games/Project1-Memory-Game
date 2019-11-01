const cards = document.querySelectorAll('.memory-card');
let lockBoard = false;

let hasFlippedCard = false;
let firstCard, secondCard;

let score = 100;
let finalScoreSet = document.getElementById('finalScore');
finalScoreSet.innerText = score;
let modal = document.getElementById("popup1");
let closeicon = document.querySelector(".close");
let matchedCard = document.getElementsByClassName("match");

// //Initial flip so the player can view all the cards and memorize


function initialFlip(){
setTimeout(loadFlip,800);

}

function loadFlip(){

cards.forEach(card => {
   card.classList.add('flip');
   card.classList.add('avoid-clicks');
});
}

// //Player has 8 seconds to view the cards, 
// //below we're making all the cards face back again

function flipBack(){
setTimeout(loadAnotherFlip,8000);
    
    }

function loadAnotherFlip(){
   cards.forEach(card => {
        card.classList.remove('flip');
        card.classList.remove('avoid-clicks');
        });
    }  
////////////////////////////////////////////////////////////

function flipCard(){
    if(lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard){
       hasFlippedCard = true;
       firstCard = this;

       return;
    }
    
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
    
}

function checkForMatch(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
    
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

     firstCard.classList.add('x');
     secondCard.classList.add('x');
     firstCard.classList.add('match');
     secondCard.classList.add('match');

    resetBoard();
}

function unflipCards(){
 lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500); 
    score -= 5;
    let scoreField = document.getElementById('score');
    scoreField.innerText = score;
    finalScoreSet.innerText = score;
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random() * 6);
        card.style.order = randomPos;
    });
})();

function congratulations(){
    if (matchedCard.length == cards.length){
    //show congratulations modal
    modal.classList.add("show");
    };
}



initialFlip();
flipBack();


cards.forEach(card => {
    card.addEventListener('click', flipCard);
    card.addEventListener("click", congratulations);
});