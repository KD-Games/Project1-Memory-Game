let high_scores = document.querySelector("ol.high-scores");
let high_names =  document.querySelector("ol.high-names");
let scores = JSON.parse(localStorage.getItem("high-scores"))  || new Array(10);

function getName(){  
    let newName = localStorage.getItem('player');
    newName = JSON.parse(newName);
    return newName;
		}
	// console.log("asd " + getName());
// console.log("sle " + scores);

localStorage["high-scores"] = JSON.stringify(scores); //add the array to localStorage. Will change to localStorage later
//console.log(localStorage["high-scores"]);


function highScores() { //populate the <li> with array above

  if(localStorage["high-scores"]) { //if the localStorage have the array which I already created.
			high_scores.style.display = "block";
			high_scores.innerHTML = '';
			// high_names.style.display = "block";
			// high_names.innerHTML = '';

			console.log("this scorelist is " + JSON.parse(scores[0]).score);

  for(let i=0; i < scores.length; i++){
	  console.log(score);
	  let arrayScore = JSON.parse(scores[i]);
	  console.log(arrayScore, scores[i]);
  if (scores[i] === null || parseInt(score) > arrayScore.score ) {
   let Player =
	{  name:"",
	   score: 0,};
	Player.score = score;
	Player.name = getName();
	Player = JSON.stringify(Player);
	console.log("this is Player score " + JSON.parse(Player).score);

	scores.splice(i, 0, Player);
	scores.length = Math.min(scores.length, 10); //Where 10 is the max scores you want to keep
	break;
			}	
		}
		
	localStorage["high-scores"] = JSON.stringify(scores);
	//localStorage.setItem("high-scores", JSON.stringify(scores));
	
	console.log(scores);

	
	//let scorelistArr = JSON.stringify(scores);
	//let scoreBlah = JSON.parse(scorelistArr)
	
	
	scores = scores.sort((a,b)=>{
		b = JSON.parse(b);
		a = JSON.parse(a);
		if(a && b)
			return b.score - a.score;
	});
	   
	for(var i = 0; i < 10; i++){
	var s = scores[i];						
	var fragment = document.createElement('li');
		fragment.innerHTML = (typeof(s) != "undefined" ? s : "" );
		high_scores.appendChild(fragment);
	}
					
} }


highScores();

let backHomeBtn = document.querySelector("#return");
backHomeBtn.addEventListener('click', function (){
    window.location.replace("index.html"); 
});

