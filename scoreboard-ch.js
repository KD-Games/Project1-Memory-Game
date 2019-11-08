

// let high_scores = document.querySelector("ol.high-scores");
let chhigh_scores = document.getElementById("ch-high-scores");
let chscoresArray = JSON.parse(localStorage.getItem("ch-high-scores"))  || new Array(10);

chtimeLeft = sessionStorage.getItem('ch-timeLeft');

function getName(){  
    let newName = localStorage.getItem('ch-player');
    newName = JSON.parse(newName);
    return newName;
		}

function getTime(){  
let currentTime = sessionStorage.getItem('ch-timeLeft');
currentTime = JSON.parse(currentTime);
return currentTime;
	}

	// console.log("bli " + chscoresArray);
	// console.log("bli2 " + chscoresArray[0]);


localStorage["ch-high-scores"] = JSON.stringify(chscoresArray); //add the array to localStorage. Will change to localStorage later

localStorage["ch-high-scores"] = JSON.stringify(chscoresArray); //add the array to localStorage. Will change to localStorage later

function highScores() { //populate the <li> with array above

  if(localStorage["ch-high-scores"]) { //if the localStorage have the array which I already created.
			// high_scores.style.display = "block";
			chhigh_scores.innerHTML = '';
			// high_names.style.display = "block";
			// high_names.innerHTML = '';


  for(let i=0; i < chscoresArray.length; i++){

  let arrayScore = chscoresArray[i];

  if (chscoresArray[i] === null || parseInt(chscore) > arrayScore.chscore ) {
   let Player =
	{  name:"",
	   score: 0,
	   chtime: 0};
	Player.chscore = chscore;
	Player.chname = getName();
	Player.chtime = getTime();

	

    chscoresArray.splice(i, 0, Player);
	chscoresArray.length = Math.min(chscoresArray.length, 10); //Where 10 is the max scores you want to keep
	break;
			}	
		}
		
	localStorage["ch-high-scores"] = JSON.stringify(chscoresArray);
	//localStorage.setItem("high-scores", JSON.stringify(scores));
	

	
	//let scorelistArr = JSON.stringify(scores);
	//let scoreBlah = JSON.parse(scorelistArr)
	
	
	chscoresArray = chscoresArray.sort((a,b)=>{
	if(a && b){
		let n = b.chscore - a.chscore;
		if(n !==0){
			return n;
		}
		return b.chtime - a.chtime;
	}
   });


console.log(chscoresArray);
	   
	for(let i = 0; i < 10; i++){
	
	let s = chscoresArray[i];	

	let playerName;
	let playerScore;
		
	if(s.chname)
	    playerName = s.chname;
	   else 
		playerName = 'n/a';
	if(s.chscore)	
	   playerScore = s.chscore;
	   else
	 playerScore = 'n/a';
	 if(s.chtime)	
	 playerTime = s.chtime;
	 else
 playerTime = 'n/a';


	// let fragment = document.createElement('li');
	let fragment = document.createElement('tr');
	
	// fragment.innerText +="Name: " + (playerName) + " Score: " +(playerScore) + " Time Left:" +(s.time)+ " seconds";
	fragment.innerHTML +="<td class='num-align'>" + [i + 1] + ".</td><td>" + (playerName) + "</td><td>" + (playerScore) + "</td><td>" + (s.chtime) + " seconds" + "</td>";
	chhigh_scores.appendChild(fragment);
	}
					
} }

// localStorage.clear(); 

highScores();
  

let backHomeBtn = document.querySelector("#return");
backHomeBtn.addEventListener('click', function (){
    window.location.replace("index.html"); 
});


