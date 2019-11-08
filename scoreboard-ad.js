


let high_scores = document.getElementById("high-scores");
let scoresArray = JSON.parse(localStorage.getItem("high-scores"))  || new Array(10);

timeLeft = sessionStorage.getItem('timeLeft');

function getName(){  
    let newName = localStorage.getItem('player');
    newName = JSON.parse(newName);
    return newName;
		}

function getTime(){  
let currentTime = sessionStorage.getItem('timeLeft');
currentTime = JSON.parse(currentTime);
return currentTime;
	}


localStorage["high-scores"] = JSON.stringify(scoresArray); 

function highScores() { //populate the <tr> with array above
		
high_scores.innerHTML = '';
			
for(let i=0; i < scoresArray.length; i++){

  let arrayScore = scoresArray[i];

  if (scoresArray[i] === null || parseInt(score) > arrayScore.score ) {
   let Player =
	{  name:"",
	   score: 0,
	   time: 0};
	Player.score = score;
	Player.name = getName();
	Player.time = getTime();

	
//Adds player (name,score,time) to local storage adults array
    scoresArray.splice(i, 0, Player);
	scoresArray.length = Math.min(scoresArray.length, 10); //Where 10 is the max scores you want to keep
	break;
			}	
		}
		
	localStorage["high-scores"] = JSON.stringify(scoresArray);
	
	
	//sorts player by highest score and if score is the same sorts by highest time
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
	
fragment.innerHTML +="<td class='num-align'>" + [i + 1] + ".</td><td>" + (playerName) + "</td><td>" + (playerScore) + "</td><td>" + (s.time) + " seconds" + "</td>";
high_scores.appendChild(fragment);
}
					
} 


highScores();
  

let backHomeBtn = document.querySelector("#return");
backHomeBtn.addEventListener('click', function (){
    window.location.replace("index.html"); 
});


