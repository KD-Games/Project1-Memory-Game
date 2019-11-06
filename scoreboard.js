let high_scores = document.querySelector("ol.high-scores");
let scores = new Array(10); //create an empty array with 10 slots

for(let i=0; i<scores.length;i++){ // add empty string to the array.
  scores[i] = "";
}
// console.log(scores);

localStorage["high-scores"] = JSON.stringify(scores); //add the array to sessionStorage. Will change to localStorage later
// console.log(sessionStorage["high-scores"]);

function highScores() { //populate the <li> with array above
  if(localStorage["high-scores"]) { //if the sessionStorage have the array which I already created.
			high_scores.style.display = "block";
			high_scores.innerHTML = '';
			scores = JSON.parse(localStorage["high-scores"]);
			console.log(scores);
			scores = scores.sort(function(a,b){return parseInt(b)-parseInt(a)});

						for(var i = 0; i < 10; i++){
							let s = scores[i];						
							let fragment = document.createElement('li');
							fragment.innerHTML = (typeof(s) != "undefined" ? s : "" );
							high_scores.appendChild(fragment);
						}
					}
}

highScores();

function updateScores() {
  let current = score;
  scores = JSON.parse(localStorage["high-scores"]);
  for (let i = 0; i < scores.length; i++) {
    if (current >= scores[i]) {
      scores.splice(i, 0, current);
      scores.length = Math.min(scores.length, 10); //Where 10 is the max scores you want to keep
      break; //stop the loop
    }
  }
  localStorage["high-scores"] = JSON.stringify(scores);
  highScores();
}
updateScores();
