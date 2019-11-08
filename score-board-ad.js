
let high_scores = document.getElementById("high-scores");
let scoresArray = JSON.parse(localStorage.getItem("adult-scores"))  || new Array(10);



function getName(){  
let newName = localStorage.getItem('playerA');
newName = JSON.parse(newName);
return newName;
}


function getTime(){  
let currentTime = sessionStorage.getItem('timeLeft');
currentTime = JSON.parse(currentTime);
return currentTime;
	}

localStorage["adult-scores"] = JSON.stringify(scoresArray); //add the array to localStorage. Will change to localStorage later


function highScores() { //populate the <li> with array above

  if(localStorage["adult-scores"]) { //if the localStorage have the array which I already created.
			
high_scores.innerHTML = '';
			

for(let i=0; i < scoresArray.length; i++){
if (scoresArray[i] === null || parseInt(score) > scoresArray[i] ) {
   let Player =
	{  name:"",
	   score: 0,
	   time: 0};
	Player.score = score;
	Player.name = getName();
	Player.time = getTime();

	
scoresArray.splice(i, 0, Player);
scoresArray.length = Math.min(scoresArray.length, 10); //Where 10 is the max scores you want to keep
break;}	
}
		
localStorage["adult-scores"] = JSON.stringify(scoresArray);
	
	
scoresArray = scoresArray.sort((a,b)=>{
 if(a && b){
 let n = b.score - a.score;
 if(n !==0){
	return n;
		}
	return b.time - a.time;
	}
   });


for(let i = 0; i < 10; i++){
	
	let s = scoresArray[i];	

	let playerName;
	let playerScore;
		
	if(s.name)
	    playerName = s.name;
	   else 
		playerName = 'n/a';
	if(s.score)	
	   playerScore = s.score;
	   else
	 playerScore = 'n/a';
	 if(s.time)	
	 playerTime = s.time;
	 else
 playerTime = 'n/a';

let fragment = document.createElement('tr');
fragment.innerHTML +="<td class='num-align'>" + [i + 1] + "</td><td>" + (playerName) + "</td><td>" + (playerScore) + "</td><td>" + (s.time) + " seconds" + "</td>";
high_scores.appendChild(fragment);
}
} }

highScores();
  
let backHomeBtn = document.querySelector("#return");
backHomeBtn.addEventListener('click', function (){
    window.location.replace("index.html"); 
});


