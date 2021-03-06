


// //Adds name entered in Child games to session storage
let chplayerName = document.getElementById("chname");

chplayerName.addEventListener('change', function(e){
    let chpN = e.target.value;
    localStorage.setItem('ch-player', JSON.stringify(chpN));
});

// //Adds name entered in Adult games to session storage
let playerName = document.getElementById("name");
playerName.addEventListener('change', function(e){
let pN = e.target.value;
localStorage.setItem('player', JSON.stringify(pN));
});




// assigning children button element to variable: childrenButton
//assigning game start popup to variable: childrenPopButton
//assigning I'm ready popup button to variable: childrenPop

let childrenButton = document.getElementById('child');
let childrenPopButton = document.getElementById('start-children');
let childrenPop = document.getElementById("children-popup");   
let childcloseicon = document.querySelector(".child-close");


//Open popup when Children button is clicked

childrenButton.addEventListener('click', function(){
    childrenPop.classList.add('show');
});

//Close popup when child popup close button is clicked
childcloseicon.addEventListener("click", function(e){
    childrenPop.classList.remove("show");
});

//Links I'm Ready button to Level 1 Animals Game

childrenPopButton.addEventListener('click', function (){
    window.location.replace("ch1-Animals.html"); 
});


//Same below for Adults

let adultButton = document.getElementById('adult');
let adultPopButton = document.getElementById('start-adult');
let adultPop = document.getElementById("adult-popup");  
let adultcloseicon = document.querySelector(".adult-close"); 

adultButton.addEventListener('click', function(){
    adultPop.classList.add('show');
});

//Close adult popup when close button is clicked
adultcloseicon.addEventListener("click", function(e){
    adultPop.classList.remove('show');
});

adultPopButton.addEventListener('click', function (){
    window.location.replace("ad1-Netflix.html"); 
});