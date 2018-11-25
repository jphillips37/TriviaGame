$(".trivia-text").hide();
$("#timer").hide();

var timer = 0;
var correct = 0;
var incorrect = 0;
var intervalId;
var currentQuestion = 1;

function nextQuestion() {
    $(".incorrect").show();
    $(".trivia-text").hide();
    $(".trivia-"+currentQuestion).show();
    countdown();
}

function decrement() {
    timer--;
    $("#timer").html("Time Remaining: " + timer + " Seconds");

    if (timer < 1) {
        stop();
        // alert("Time is Up");
        $(".incorrect").hide();
        incorrect++;
        timer = 5;
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
    $(".correctGuesses").text("Correct Guesses: " + correct);
    $(".incorrectGuesses").text("Incorrect Guesses: " + incorrect);
}

$(".btn").on("click", function() {
    if ($("button").text() == "Start") {
        $(".btn").hide();
        $("#timer").show();
        timer = 5;
        
        currentQuestion = 1;
        nextQuestion();
    }
    else {
        reset();
    }
})

$("p").click(function() {
    console.log("click worked");
    if ($(this).attr("class") == "incorrect") {
        console.log("incorrect");
        stop();
        $(".incorrect").hide();
        incorrect++;
    }
    else {
        console.log("correct");
        $(".incorrect").hide();
        stop();
        correct++;
    }

    timer = 5;
    currentQuestion++;
    // countdown();
    if (currentQuestion < 11) {
        console.log("next question");
        setTimeout(nextQuestion, 3000);
        // countdown();
    }
    else {
        endGame();
    }
})

//nextQuestion("trivia-" + currentQuestion);


