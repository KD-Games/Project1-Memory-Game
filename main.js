
// assigning children button element to variable: childrenButton
//assigning game start popup to variable: childrenPopButton
//assigning I'm ready popup button to variable: childrenPop

let childrenButton = document.getElementById('child');
let childrenPopButton = document.getElementById('start-children');
let childrenPop = document.getElementById("children-popup");   


//Open popup when Children button is clicked

childrenButton.addEventListener('click', function(){
    childrenPop.classList.add('show');
});

//Links I'm Ready button to Level 1 Animals Game

childrenPopButton.addEventListener('click', function (){
    window.location.replace("ch1-Animals.html"); 
});




let adultButton = document.getElementById('adult');
let adultPopButton = document.getElementById('start-adult');
let adultPop = document.getElementById("adult-popup");   




adultButton.addEventListener('click', function(){
    adultPop.classList.add('show');
});




adultPopButton.addEventListener('click', function (){
    window.location.replace("ad1-Netflix.html"); 
});