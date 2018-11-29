$(".trivia-text").hide();
$("#timer").hide();
$("#correctImage, #incorrectImage, #expired").hide();

var timer = 0;
var correct = 0;
var incorrect = 0;
var intervalId;
var currentQuestion = 1;
var backgroundArray = ["assets/images/background-image-1.jpg",
                        "assets/images/background-image-2.jpg", 
                        "assets/images/background-image-3.jpg", 
                        "assets/images/background-image-4.jpg", 
                        "assets/images/background-image-5.jpg", 
                        "assets/images/background-image-6.jpg", 
                        "assets/images/background-image-7.jpg", 
                        "assets/images/background-image-8.jpg", 
                        "assets/images/background-image-9.jpg", 
                        "assets/images/background-image-10.jpg",
                        "assets/images/background-image-11.jpg"];

function nextQuestion() {
    $("#correctImage, #incorrectImage, #expired").hide();
    $(".incorrect").show();
    $(".trivia-text").hide();
    $(".trivia-"+currentQuestion).show();
    updateBackground();
    countdown();
}

function decrement() {
    timer--;
    $("#timer").html("Time Remaining: " + timer + " Seconds");

    if (timer < 1) {
        stop();
        $("#expired").show();
        $(".incorrect").hide();
        incorrect++;
        timer = 15;
        currentQuestion++;
        if (currentQuestion <= 10) {
            setTimeout(nextQuestion, 3000);
        }
        else {
            endGame();
        }
    }
}

function countdown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function reset() {
    correct = 0;
    incorrect = 0;
    currentQuestion = 1;
    $(".results").hide();
    $(".trivia-text").hide();
    $("#timer").hide();
    $("button").text("Start");
}

function endGame() {
    $("#timer").hide();
    $(".trivia-text").hide();
    $("button").show();
    $("button").text("Reset");
    $(".results").show();
    $("#correctImage, #incorrectImage, #expired").hide();
    $(".correctGuesses").text("Correct Guesses: " + correct);
    $(".incorrectGuesses").text("Incorrect Guesses: " + incorrect);
}

function updateBackground() {
    var backgroundImage = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
    console.log(backgroundImage);
    $("body").css("background-image", "url("+backgroundImage+")");
}

updateBackground();

$(".btn").on("click", function() {

    backgroundArray.sort(function() { return 0.5 - Math.random() }); 
    console.log(backgroundArray);

    if ($("button").text() == "Start") {
        $(".btn").hide();
        $("#timer").show();
        timer = 15;
        
        currentQuestion = 1;
        nextQuestion();
    }
    else {
        reset();
    }
    updateBackground();
})

$("p").click(function() {
    // console.log("click worked");
    if ($(this).attr("class") == "incorrect") {
        // console.log("incorrect");
        stop();
        $("#incorrectImage").show();
        $(".incorrect").hide();
        incorrect++;
    }
    else {
        // console.log("correct");
        $(".incorrect").hide();
        $("#correctImage").show();
        stop();
        correct++;
    }

    timer = 15;
    currentQuestion++;
    if (currentQuestion < 11) {
        // console.log("next question");
        setTimeout(nextQuestion, 3000);
    }
    else {
        setTimeout(endGame, 3000);
    }

})