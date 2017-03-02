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
			}
		});

// 3. user clicks an answer for each question
	$('.btnA').on('click', function (storeTriviaBtnAnswer) {
			console.log ('Trivia Button A Clicked!');	
		}); 

// 4. store information from answer 
	// 4.1 compare to correct answer

// 5. add value of 4.1 as win, lose or unanswered

// 6. end game
	// 6.1 when timer equals 0 
	// 6.2 OR user answers last question

// 7. restart 
		// 7.1 (empty values of trivia answers)
		// 7.2 return to start screen

		$('.restartBtn').on('click', function () {
			console.log ('restart buttonClicked!');	
			$('.starterScreen').css({
				'display': 'block'
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

