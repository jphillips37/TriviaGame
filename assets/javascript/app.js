$(".trivia-text").hide();
$("#timer").hide();

var timer = 0;
var correct = 0;
var incorrect = 0;

function nextQuestion(questionNumber) {
    $(".trivia-text").hide();
    $("."+questionNumber).show();
}

$(".btn").on("click", function() {
    if ($("button").text() == "Start") {
        // console.log("start");
        $(".btn").hide();
        $("#timer").show();
        nextQuestion("trivia-one");
        timer = 15;
    }
})