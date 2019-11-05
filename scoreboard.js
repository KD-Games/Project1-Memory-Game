let high_scores = document.querySelector("ol.high-scores");
let current_score = sessionStorage.getItem('score');

// High scores scoreboard
function HighScores() {
  // if(typeof(Storage)!=="undefined"){
      let scoreslist = false;
      if(localStorage["high-scores"]) {
          high_scores.style.display = "block";
          high_scores.innerHTML = '';
          scoreslist = JSON.parse(localStorage["high-scores"]);
          scoreslist = scoreslist.sort(function(a,b){return parseInt(b)-parseInt(a)});

          for(let i = 0; i < 10; i++){
              let s = scoreslist[i];                        
              let fragment = document.createElement('li');
              fragment.innerHTML = (typeof(s) != "undefined" ? s : "" );
              console.log(fragment)
              high_scores.appendChild(fragment);
          }
      }
  // }
}
HighScores();
function UpdateScore() {
  // if(typeof(Storage)!=="undefined"){
      let current = current_score; //get current score
      let scoreslist = false;
      if(localStorage["high-scores"]) {

          scoreslist = JSON.parse(localStorage["high-scores"]);
          scoreslist = scores.sort(function(a,b){return parseInt(b)-parseInt(a)});
          
          for(let i = 0; i < 10; i++){
              let s = parseInt(scoreslist[i]);
              
              let val = (!isNaN(s) ? s : 0 );
              if(current > val)
              {
                  val = current;
                  scoreslist.splice(i, 0, parseInt(current));
                  break;
              }
          }
          
          scoreslist.length = 10;                                
          localStorage["high-scores"] = JSON.stringify(scoreslist);

      } else {                        
          let scoreslist = new Array();
          scoreslist[0] = current;
          localStorage["high-scores"] = JSON.stringify(scoreslist);
      }
      HighScores();
  // } 
}
