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


// 2.  timer (5 sec) begins when start button is clicked
// 		
		$('.startBtn').on('click', function (startTimerGoing) {
			var n = 5;
			setTimeout(countDown, 1000);

			function countDown(){
			   n--;
			   if(n > 0){
			      setTimeout(countDown,1000);
			   }
			   $(".timerScreen").html('<h2> Time Left: ' + n + ' Seconds!</h2>');
				
// QUESTION: I'M HAVING A SCOPE PROBLEM BECAUSE I CANNOT GET THE ALERTGAMEOVER TO WORK OUTSIDE OF THE COUNTDOWN FUNCTION
// WHICH IS MAKING THIS MORE COMPLICATED THAN NECESSARY.  THOUGHTS?

				function alertGameOver(){
					if(n === 0){
						$(".timerScreen").html('<h2> Time is up!</h2>');
				
					// add values to scoreboard
					compareAnswerValues()

					// make trivia disapear
						$('.triviaScreen').css({
						'display': 'none'
						});

					// make .endScreen appear
						$('.endScreen').css({
						'display': 'block'
						});
					}
				}
			
			alertGameOver();

			}

			
		});

// 3. variable for wins, losses and unanswered

var win = 0;
var loss = 0;
var unanswered = 0;



	// 3.0 Variable for Correct Answers
var correctAnswer1 = "Honda";
	
	// 3.2 store information from answer 

var userAnswer1

// 4. User's answer for each question is stored in userAnswer1 variable when Submit Button is Clicked

// QUESTION: I CAN ONLY DO THIS ON WHEN THE SUBMIT BUTTON IS PUSHED.  IS THERE ANOTHER WAY TO GRAB THE DATA VALUE?

	$('.btnA').on('click', function (storeTriviaBtnAnswer) {
			console.log ('Trivia Button Clicked!');	
			userAnswer1 = $('input[name="question1"]:checked').val();
			console.log(userAnswer1);
			compareAnswerValues();
		}); 
	
// 5. compare correctAnswer1 to userAnswer1
		function compareAnswerValues() {
			i = 0;
			if (userAnswer1 === undefined) {
					unanswered = i + 1;
					console.log ("unanswered:" + unanswered);
				} else if (userAnswer1 === correctAnswer1){
					win = i + 1;
					console.log ("win:" + win);
				} else {
					loss = i + 1;
					console.log ("losses:" + win);
				}
				showScoreboard();
			}
				

	// 5.1 add value of 4.1 as win, lose or unanswered
		function showScoreboard() {
			$(".scoreBoard").html('<h2>All Done!</h2><h3>Wins: ' + win + '</h3> <h3>Losses: ' + loss + '</h3>' + '<h3>Unanswerd: ' + unanswered + '</h3>');
		}	

// 6. end game [submit all values]
	// 6.1 when setTimeOut = 0
 
	// 6.2 OR user submits answers [I think the instructions mean for it to happen automatically when the last question is answered]


// 7. restart 
		// 7.1 (empty values of trivia answers)
		// 7.2 return to start landing 

		$('.restartBtn').on('click', function () {
			console.log ('restart buttonClicked!');	
			$('.starterScreen').css({
				'display': 'block'
			});

			$('.timerScreen').css({
				'display': 'none'
			});
			
			$('.endScreen').css({
				'display': 'none'
			});
		}); 

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

