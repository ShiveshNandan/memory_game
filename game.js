// alert("its me");
var buttonColours = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;



function soundPlay(name){
 var audio = new Audio("sounds/"+ name +".mp3");
 audio.play();
}



$(".btn").on("click",function(){
    // $(this).fadeIn(100).fadeOut(100).fadeIn(100);
    var userChosenColour = $(this).attr("id");
    // console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    soundPlay(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});





function animatePress(currentColour){
   $("#"+currentColour).addClass("pressed");
   setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
   },100);
};





function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);

    $(".box"+randomNumber).fadeIn(100).fadeOut(100).fadeIn(100);
    soundPlay(randomChosenColour);

    level = level+1;
  $(".levelssn").text("Level " + level);
}



// console.log(gamePattern);



var started = false; 
$(document).keypress(function() {
  if (started == false)  
  {
    // $(".levelssn").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      soundPlay("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $(".levelssn").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}



// $("input").keypress(function(event){
//    if (event.key = a) {
//           console.log(hi);
          
//    }

// });