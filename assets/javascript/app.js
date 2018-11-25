$(".trivia-text").hide();
$("#timer").hide();

var timer = 0;
var correct = 0;
var incorrect = 0;
var intervalId;
var currentQuestion = 0;

function nextQuestion(questionNumber) {
    $(".trivia-text").hide();
    $("."+questionNumber).show();
}

function decrement() {
    timer--;
    $("#timer").html("Time Remaining: " + timer + " Seconds");

    if (timer < 1) {
        stop();
    }
}

function countdown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
}

$(".btn").on("click", function() {
    if ($("button").text() == "Start") {
        $(".btn").hide();
        $("#timer").show();
        timer = 15;
        
        nextQuestion("trivia-1");
        currentQuestion = 1;
        countdown();
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
        stop();
        correct++;
    }

    timer = 4;
    currentQuestion++;
    if (currentQuestion < 11) {
        nextQuestion("trivia-" + currentQuestion);
        countdown();
    }
})


