// 1. start button

	// 1.1 when start button is clicked show trivia game

	// 	Add an on click listener to all elements that have the class .startBtn 

		$('.startBtn').on('click', function (makeTriviaAndTimerScreenAppear) {
			console.log ('start buttonClicked!');	
			$('.starterScreen').css({
				'display': 'none'
			});
			$('.triviaScreen').css({
				'display': 'block'
			});
			$('.timerScreen').css({
				'display': 'block'
			});
		}); 


// 2.  click start button to trigger timer countdown 

// 	
var n

startBtnTimer();

		function startBtnTimer() {
			$('.startBtn').on('click', function (startTimerGoing) {
				// var n = 5;
				n = 4;
				setTimeout(countDown, 1000);
				countDown();	
			});
		}
// 2.1 timer countdown function 

		function countDown(){
			   n--;
			   if(n > 0){
			      setTimeout(countDown,1000);
			       $(".timerScreen").html('<h2> Time Left: ' + n + ' Seconds!</h2>');
			   } else {
			  	 $(".timerScreen").html('<h2> Time is up!</h2>');
			  	 compareAnswerValues();
			  	 showScoreboard();
			  	 hideTrivia();
				}
		}

// 2.2 display .endscreen when the time hits 0

		function hideTrivia(){
			// make trivia disapear
						$('.triviaScreen').css({
						'display': 'none'
						});

			// make .endScreen appear
						$('.endScreen').css({
						'display': 'block'
						});
				}

// 3. variable for wins, losses and unanswered

var win = 0;
var loss = 0;
var unanswered = 0;



	// 3.0 Variable for Correct Answers
var correctAnswer1 = "Honda";
	
	// 3.2 store information from answer 

var userAnswer1
var userAnswer2

// 4. User's answer for each question is stored in userAnswer1 variable when Submit Button is Clicked

	$('.radioSelect').on('click', function (storeTriviaBtnAnswer) {
			console.log ('Trivia Button Clicked!');	
			userAnswer1 = $('input[name="question1"]:checked').val();
			userAnswer2 = $('input[name="question2"]:checked').val();
			createArrayOfUserAnswers();
			// compareArray1();
			// compareArray2();
			compareAnswerValues();
		}); 
	

// // putting user answers into an array so that I can compare them to the correct answer 

					var userAnswers = [];
					var correctAnswerArray = ["Honda", "Volvo"];

					function createArrayOfUserAnswers() {
					    userAnswers.push(userAnswer1);
					    userAnswers.push(userAnswer2);
					}

							// COMPARE TO ARRAY OF CORRECT ANSWERS

				function compareAnswerValues() {

					


					function compareArray1(){
						i = 0;
						if (correctAnswerArray[0] === userAnswers[0])
							{ win = i + 1;
						}  else if (correctAnswerArray[0] !== userAnswers[0]){
							loss = i + 1;
						}
					}
					console.log("win");

					function compareArray2(){
						i = 0;
						if (correctAnswerArray[1] === userAnswers[1])
							{ win = i + 1;
						}  else if (correctAnswerArray[0] !== userAnswers[0]){
							loss = i + 1;
						}
					}
					console.log("win");
				}

// 5. compare correctAnswer1 to userAnswer1
			// function compareAnswerValues() {
			// 	i = 0;

			// 	if  (userAnswer1 === correctAnswer1) {
			// 			win = i + 1;
						
			// 		} else if (userAnswer1 === undefined || 0){
			// 			unanswered = i + 1;
						
			// 		} else {
			// 			loss = i + 1;
			// 		} 

			// }
				

	// 5.1 add value of 4.1 as win, lose or unanswered
		function showScoreboard() {
			$(".scoreBoard").html('<h2>All Done!</h2><h3>Wins: ' + win + '</h3> <h3>Losses: ' + loss + '</h3>' + '<h3>Unanswered: ' + unanswered + '</h3>');
		}	

// 6. end game [submit all values]
	// 6.1 when setTimeOut = 0; see 2.2 above
 

// 7. restart 
		// 7.1 (empty values of trivia answers)


		// 7.2 return to start landing 

			$('.restartBtn').on('click', function () {
			
			console.log ('restart buttonClicked!');	

			$('.radioSelect').prop('checked', false);

// THIS ISN'T RESETTING THE VARIABLES TO ZERO WHEN RESTART IS CLICKED. I THINK IT HAS TO DO WITH HOW I HANDLED THE UNASWERED PART OF THE SCOREBOARD
			

			$(".scoreBoard").empty();

			$('.starterScreen').css({
				'display': 'block'
			});

			$('.timerScreen').css({
				'display': 'none'
			});
			
			// $('.endScreen').css({
			// 	'display': 'none'
			// });

			resetVarToZero();
		}); 

function resetVarToZero(){
			win = 0;
			loss = 0;
			unanswered = 0;
			console.log(win);
			console.log(loss);
			console.log(unanswered);
}

console.log ("hi maggie");

// APPLICATION STATE
	// variable list 
		// var firstNumber = '';
		// var secondNumber = '';
		// var result = null;
		// var phase = 'start';

	// store data in object

		// appState = {
		// 	firstNumber: '',
		// 	secondNumber: '',
		// 	result: null,
		// phase: 'start'
		// }

// EVENT MANAGEMENT

	// 	Javascript

	// 	document.onkeyup = function(event) {

	// 	}

	// ****************

	// 	JQuery

	// 	Add an on click listener to all elements that have the class buttonAnswer 

	// 	$('.buttonAnswer').on('click', function () {

	// 		var buttonValue = this.value;
	// 		handleAnswerSelection (buttonValue);	
	// 	}); 

// FUNCTIONS AND LOGIC


	// process answer selected by user

		// function handleAnswerSelection(buttonValue) {


		// }

	// if/else: compare user answer to actual answer

		// if (condition1){
		// 	block of code to be executed if the condition1 is true
		// } else if (condition2) {
		// 	block of code to be executed if the condition1 is false and condition2 is true
		// } else {
		// 	block of code to be executed if the condition 1 is false and condition 2 is false
		// }


// DISPLAY MANAGEMENT 

// 	function that pushes appState to the display 

	// 	function refreshDisplay(){
	// 		console.log(appState);

	// 	}

// // INITIALIZE / SETUP APPLICATION

// // 	Use a function to initialize trivia

		// 	function initializeTrivia(){
		// 		//reset the appState values

		// 		appState.firstNumber = ''
		// 		appState.secondNumber = ''
		// 		appState.result = null
		// 		appState.result = 'start'
				
		// 		// clear display

		// 		refreshDisplay();
		// 	}

