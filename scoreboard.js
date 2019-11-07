let high_scores = document.querySelector("ol.high-scores");

let scoresArray = JSON.parse(localStorage.getItem("high-scores"))  || new Array(10);

timeLeft = sessionStorage.getItem('timeLeft');

function getName(){  
    let newName = localStorage.getItem('player');
    newName = JSON.parse(newName);
    return newName;
		}

		console.log("Name is " + getName());
		console.log(score);
		console.log(timeLeft);

localStorage["high-scores"] = JSON.stringify(scoresArray); //add the array to localStorage. Will change to localStorage later

function highScores() { //populate the <li> with array above

  if(localStorage["high-scores"]) { //if the localStorage have the array which I already created.
			high_scores.style.display = "block";
			high_scores.innerHTML = '';
			// high_names.style.display = "block";
			// high_names.innerHTML = '';


  for(let i=0; i < scoresArray.length; i++){

	let arrayScore = scoresArray[i];
	// console.log(scoresArray[0]);

  if (scoresArray[i] === null || parseInt(score) > arrayScore.score ) {
   let Player =
	{  name:"",
	   score: 0,};
	Player.score = score;
	Player.name = getName();
	Player.time = timeLeft;
	Player = Player;

	console.log("This Player.name " + Player.name);
	console.log("This Player.score " + Player.score);
	console.log("This Player.time " + Player.time); 


    scoresArray.splice(i, 0, Player);
	scoresArray.length = Math.min(scoresArray.length, 10); //Where 10 is the max scores you want to keep
	break;
			}	
		}
		
	localStorage["high-scores"] = JSON.stringify(scoresArray);
	//localStorage.setItem("high-scores", JSON.stringify(scores));
	

	
	//let scorelistArr = JSON.stringify(scores);
	//let scoreBlah = JSON.parse(scorelistArr)
	
	
	scoresArray = scoresArray.sort((a,b)=>{
	
		if(a && b)
			return b.score - a.score;
	});


	   
	for(let i = 0; i < 10; i++){
	
	let s = scoresArray[i];	

	let playerName;
	let playerScore;
	let playerTime;
	
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



	let fragment = document.createElement('li');
	
	fragment.innerText +="Name: " + (playerName) + " Score: " +(playerScore) + " Time Left: " +(playerTime);
	high_scores.appendChild(fragment);
	}
					
} }

// localStorage.clear();

highScores();
  

let backHomeBtn = document.querySelector("#return");
backHomeBtn.addEventListener('click', function (){
    window.location.replace("index.html"); 
});


