// start button, need to make an on click to enter the game
// the clicking of the start button will also start the time 
//also activates/ need timer function
// display questions to the screen:
// for each question
// loop over .answers
// create a redio input with the answer
// add it to the DOM
// have user chose answers to the 6 questions. only one answer
// determine correct answers
// have counters for right and wrong
// submit button at the bottom
// this will stop the timer if user finishes before the time runsout

// if time runs out || user clicks submit
// find all the radio-buttons for each question
// check if the selected radio buttons match the `correct` for each question
// if correct, increment rightAnswers variable
// if incorrect, increment wrongAnswers variable
// if no radios in question is selected, increment noAnswers

//show the stats page
// stats page will show amount they got right and wrong
// create html elements for rightAnswers, wrongAnswers, & noAns.wers
// append to the page (somewhere?)
// maybe also display a message depending on how they did...
// like, if rightAnswers is < 3, shame them
// but if > 5 tell them good job
// diaply button to return users to start screen, or restart quiz
$(document).ready(function () {
    $("#timer-start").on("click", startGame);
    $("#timer-done").on("click", doneGame);
    $("#restart").on("click", restartRoundof)
    $('#game').hide();
    $('#start-screen').show();
    $("#stats-screen").hide()
    $("#great-job").hide();
    $("#bad-job").hide();



    var rightAnswers = 0;
    var wrongAnswers = 0;
    var noAnswers = 0;

    var timeRemaining = 30;

    var intervalTime;
    let noQuestions = false;
    var clockRunning = false;
    var quotes = [{
            q: 'Sometimes the right path is not the easiest one.',
            answers: ['Finding Nemo', 'Pocahontas', 'The AristoCats', 'Peter Pan'],
            correct: 'Pocahontas'
        },
        {
            q: "Ohana means family, and family means no one gets left behind or forgotten.",
            answers: ['Lilo &amp; Stitch', 'Mulan', 'Cinderella', 'Fox &amp; the Hound'],
            correct: 'Lilo &amp; Stitch'
        },
        {
            q: "The flower that blooms in adversity is the most rare and beaufitul of them all.",
            answers: ['Lion King', 'Pocahontas', 'Mulan', 'Pinocchio'],
            correct: 'Mulan'
        },
        {
            q: "Ladies do not start fights, but they can finish them.",
            answers: ['The AristoCats', 'Alice in Wonderland', 'Lion King', 'Peter Pan'],
            correct: 'The AristoCats'
        },
        {
            q: "Nothing's impossible.",
            answers: ['Dumbo', 'Lilo &amp; Stitch', 'Finding Nemo', 'Alice in Wonderland'],
            correct: 'Alice in Wonderland'
        },
        {
            q: "Second star to the right and straight on 'til morning",
            answers: ['Aladdin', 'Toy Story', 'Cinderella', 'Peter Pan'],
            correct: 'Peter Pan'
        }
    ];
    // $('input:radio[name=sex]')[1].checked = true; <--- possibly could be how to check what question the user selected

    let timeClock = document.getElementById("countdown");

    function startGame() {
        if (!clockRunning) {
            clockRunning = true;
            $('#game').show();
            $('#start-screen').hide();
            if(noQuestions === false) {
            populateQuestions()
            }
            // starting clock at 30 seconds
            intervalTime = setInterval(function () {

                    // countdown from 30 sec
                    timeRemaining--;
                    timeClock.innerHTML = "You have " + timeRemaining + " seconds remaining";
                    console.log(timeRemaining)
                    // when time is 0 will go to stats page, gameover
                    if (timeRemaining === 0) {
                        doneGame();
                        timeRemaining = 30;
                    };
                },
                1000);

            clockRunning = true;
        }
    }


    //html(quotes[i].answers[i])
    let populateQuestions = function () {

        if (clockRunning === false) {

            if ($("input[type='radio'][class='question0'][id ='Pocahontas']:checked").val()) {
                rightAnswers++
            } else {
                wrongAnswers++
            }
            if ($("input[type='radio'][class='question5'][id ='Peter Pan']:checked").val()) {
                rightAnswers++
            } else {
                wrongAnswers++
            }
            if ($("input[type='radio'][class='question1'][id = 'Lilo &amp; Stitch']:checked").val()) {
                rightAnswers++
            } else {
                wrongAnswers++
            }
            if ($("input[type='radio'][class='question2'][id = 'Mulan']:checked").val()) {
                rightAnswers++
            } else {
                wrongAnswers++
            }
            if ($("input[type='radio'][class='question3'][id = 'The AristoCats']:checked").val()) {
                rightAnswers++
            } else {
                wrongAnswers++
            }
            if ($("input[type='radio'][class='question4'][id = 'Alice in Wonderland']:checked").val()) {
                rightAnswers++
            } else {
                wrongAnswers++
            }
            console.log(rightAnswers)
            console.log(wrongAnswers)
            displayLastScreen()
            noQuestions = true;
            return;
        }
        for (i = 0; i <= 5; i++) {

            let question = $("<p>")
            question.html(quotes[i].q)
            console.log(question)
            question.appendTo("." + "question" + [i])
        }

        for (i = 0; i < quotes[0].answers.length; i++) {

            let questionLabel = $("<span>").html(quotes[0].answers[i]);
            let radioLabel = ($('<input type = "radio"> name = "question"').addClass("question0").addClass("aButton"))
            radioLabel.attr("id", quotes[0].answers[i])
            let questionList = $('<label for="question">').append(radioLabel).append($(questionLabel))
            questionList.appendTo(".question0")

            let questionLabel1 = $("<span>").html(quotes[1].answers[i])
            let radioLabel1 = ($('<input type = "radio"> name = "question1"').addClass("question1").addClass("aButton"))
            radioLabel1.attr("id", quotes[1].answers[i])
            let questionList1 = $('<label for ="question1">').append(radioLabel1).append($(questionLabel1))
            questionList1.appendTo(".question1")

            let questionLabel2 = $("<span>").html(quotes[2].answers[i])
            let radioLabel2 = ($('<input type = "radio"> name = "question2"').addClass("question2").addClass("aButton"))
            radioLabel2.attr("id", quotes[2].answers[i], )
            let questionList2 = $('<label for ="question2">').append(radioLabel2).append($(questionLabel2))
            questionList2.appendTo(".question2")

            let questionLabel3 = $("<span>").html(quotes[3].answers[i])
            let radioLabel3 = ($('<input type = "radio"> name = "question3"').addClass("question3").addClass("aButton"))
            radioLabel3.attr("id", quotes[3].answers[i])
            let questionList3 = $('<label for ="question3">').append(radioLabel3).append($(questionLabel3))
            questionList3.appendTo(".question3")

            let questionLabel4 = $("<span>").html(quotes[4].answers[i])
            let radioLabel4 = ($('<input type = "radio"> name = "question4"').addClass("question4").addClass("aButton"))
            radioLabel4.attr("id", quotes[4].answers[i])
            let questionList4 = $('<label for ="question4">').append(radioLabel4).append($(questionLabel4))
            questionList4.appendTo(".question4")

            let questionLabel5 = $("<span>").html(quotes[5].answers[i])
            let radioLabel5 = ($('<input type = "radio"> name="question5"').addClass("question5").addClass("aButton"))
            radioLabel5.attr("id", quotes[5].answers[i])
            let questionList5 = $('<label for ="question5">').append(radioLabel5).append($(questionLabel5))
            // questionList5.attr("id", quotes[5].answers[i])
            questionList5.appendTo(".question5")
        }

        //    let question2 = $('<input type="radio">').text(quotes[i].answers[i]).appendTo(".question" + [i]);
        //    let question3 = $('<input type="radio">').appendTo(".question" + [i]);
        //    let question4 = $('<input type="radio">').appendTo(".question" + [i]);

        // for(i = 1; i < quotes[i].answers.length; i++) {
        //     $(question1).text(quotes[i].answers[i])
        //     $(question1).appentTo(".question" + [i])
        //     console.log(question1)
        // }
    }
    //    $(".questionz").text(quotes[i].answers[i])

    // function checkAnswers() {
    //     console.log("hey check")
    //   let radioValue =  $("input[type='radio'][name='question5']:checked").val()
    //   console.log(radioValue)
    // }


    function doneGame() {
        console.log('YA DONE');
        clearInterval(intervalTime);
        clockRunning = false;
        populateQuestions()

    }

    function displayLastScreen() {
        $('#game').hide();
        $('#start-screen').hide();
        $("#stats-screen").show()
        let userCorrectGuesses = document.getElementById("correctGuesses")
        let userIncorrectGuesses = document.getElementById("incorrectGuesses")
        userCorrectGuesses.innerHTML = "You correctly answered " + rightAnswers + " questions!"
        userIncorrectGuesses.innerHTML = "You incorrectly answered " + wrongAnswers + " questions!"

        if (rightAnswers > 3) {
            $("#great-job").show();
        } else if (rightAnswers < 3) {
            $("#bad-job").show();
        }
    }

    function restartRoundof() {
        rightAnswers = 0;
        wrongAnswers = 0;
        timeRemaining = 30
        $("#stats-screen").hide();
        // $("#game").show()
        // for(let i = 0; i < quotes[0].answers.length; i++){


        let radioList = document.getElementsByClassName("aButton")
        for (let i = 0; i < radioList.length; i++) {
            if (radioList[i].checked) {
                radioList[i].checked = false
            }
        }
    
        startGame()


        console.log("restart")

    }
    // var startGame= $("#timer-start").on("click", function () {
    //     $('#start-screen').show();
    //     $('#game').hide();

    //     //  Set the button alert's timeout to run three seconds after the function's called.
    //     // startButton = setTimeout(function () {
    //     //     alert("Start Game");
    //     // }, 1000);



    // });

});








// setTimeout(thirtySeconds, 1000 * 30); //this should be the timer at the start with a on click
// setTimeout(timeUp, 1000 * 10); //this should be the end times up go to stats page

// var doneButton;
// $("#timer-done").on("click", function () {
//     // Clear the button alert's timeout.
//     clearTimeout(doneButton);
// });