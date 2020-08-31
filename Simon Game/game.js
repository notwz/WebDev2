var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;


//nextSequence();

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

});

var gameStart = true;

while (true) {
    $(this).on("keypress", function () {
        nextSequence();
        $("h1").text("level 0");
        gameStart = false;

    })
}





function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    level++;
    $("h1").text("level " + level);

}

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}