let high_scores = document.querySelector("ol.high-scores");
let scores = new Array(10); //create an empty array with 10 slots

for(let i=0; i<scores.length;i++){ // add empty string to the array.
  scores[i] = "";
}
// console.log(scores);

sessionStorage["high-scores"] = JSON.stringify(scores); //add the array to sessionStorage. Will change to localStorage later
// console.log(sessionStorage["high-scores"]);

function highScores() { //populate the <li> with array above
  if(sessionStorage["high-scores"]) { //if the sessionStorage have the array which I already created.
			high_scores.style.display = "block";
			high_scores.innerHTML = '';
			scores = JSON.parse(sessionStorage["high-scores"]);
			console.log(scores);
			scores = scores.sort(function(a,b){return parseInt(b)-parseInt(a)});

						for(var i = 0; i < 10; i++){
							var s = scores[i];						
							var fragment = document.createElement('li');
							fragment.innerHTML = (typeof(s) != "undefined" ? s : "" );
							high_scores.appendChild(fragment);
						}
					}
}

highScores();

function updateScores() {

}