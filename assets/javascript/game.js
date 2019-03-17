$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    // Selects random number for the start of a game.
    // Number should be between 19 - 120.
    //
    $('#computerRandom').text(Random);
    // Appends random number to the computerRandom id in the html doc.
    //
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // Sets up random numbers for each crystal.
    // Random number has to be between 1 - 12.
    // 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decare variables for tally score.
  $('#totalWins').text(wins);
  $('#totalLosses').text(losses);
  //Resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#computerRandom').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#totalNumber').text(userTotal);
        } 
  //Adds the wins to the totalWins.
  function winner(){
  alert("You won! Lucky!");
    wins++; 
    $('#totalWins').text(wins);
    reset();
  }
  //Addes the losses to the totalLosses.
  function loser(){
  alert ("You lost! Gosh!");
    losses++;
    $('#totalLosses').text(losses);
    reset()
  }
  //Sets up clicking for crystals.
    $('#crystalBlue').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#totalNumber').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#crystalWhite').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#totalNumber').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#crystalRed').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#totalNumber').text(userTotal);
  //Sets win/lose conditions.
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#crystalGreen').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#totalNumber').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 