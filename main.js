

//Adds name entered in Child games to session storage
let childName = document.getElementById("cname");


childName.addEventListener('change', function(e){
let pChild = e.target.value;
localStorage.setItem('playerC', JSON.stringify(pChild));

});


//Adds name entered in Adult games to session storage
let adultName = document.getElementById("aname");

adultName.addEventListener('change', function(e){
let pAdult = e.target.value;
localStorage.setItem('playerA', JSON.stringify(pAdult));

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