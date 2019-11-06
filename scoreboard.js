let high_scores = document.querySelector("ol.high-scores");
let scores = JSON.parse(localStorage.getItem("high-scores"))  || new Array(10);

//create an empty array with 10 slots

// for(let i=0; i<scores.length;i++){ // add empty string to the array.
//   scores[i] = "";
  
// }
// console.log(scores);

localStorage["high-scores"] = JSON.stringify(scores); //add the array to localStorage. Will change to localStorage later
// console.log(localStorage["high-scores"]);

function highScores() { //populate the <li> with array above

  if(localStorage["high-scores"]) { //if the localStorage have the array which I already created.
			high_scores.style.display = "block";
			high_scores.innerHTML = '';
			// scores = JSON.parse(localStorage.getItem("high-scores"));

			console.log('storage direct',localStorage["high-scores"]);

			console.log('full array', scores);
		
			for(let i=0; i < scores.length;i++){
				
				console.log('length', scores.length);
				console.log("current", scores[i]);

				if (parseInt(score) > Number(scores[i]) || scores[i] === "") {
				scores.splice(i, 0, parseInt(score));
				console.log(scores);

				
				
				scores.length = Math.min(scores.length, 10); //Where 10 is the max scores you want to keep
				break;
			}	
		}
		
		localStorage["high-scores"] = JSON.stringify(scores);
		localStorage.setItem("high-scores", JSON.stringify(scores));


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


