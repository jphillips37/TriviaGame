# TriviaGame

all questions and answers will be visible by default in the html

in js, before anything happens, hide all questions/answers and only show header and start button

timer variable
correct guesses variable
incorrect guesses variable

on button click, check text property of the button.
    if text = start, hide the button, then show the first question and start 30 second timer

        if answer class element is clicked, check if it's the correct answer

            stop countdown timer
            if it's correct, hide all other answers and start a short timer (3-5 seconds)
            hide first question div
            show second question div and start 30 second timer

            if it's incorrect
            stop countdown timer
            set css text style to strikethrough for the chosen answer, and hide other incorrect answers
        
        if no answer is selected, display out of time message and hide all incorrect answers
        after a short time (3-5 seconds), show next question

        repeate this for all questions

        after all questions have been answered, hide the final question and display the number of correct and incorrect answers
        set button text value to reset

    if text = reset:
        set variables = 0
        hide all text, only header and button should be visible