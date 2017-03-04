


// 2.  timer countdown 

// 	
var n

startBtnTimer();

		function startBtnTimer() {
			$('.startBtn').on('click', function (startTimerGoing) {
				// var n = 5;
				n = 10;
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
			  	 compareAnswerValues1();
			  	 compareAnswerValues2();
			  	 compareAnswerValues3();
			  	 showScoreboard();
			  	 hideTrivia();
				}
		}



// 3. variable for wins, losses and unanswered
// var i = 0;
var win = 0;
var loss = 0;
var unanswered = 0;



	// 3.0 Variable for Correct Answers
var correctAnswer1 = "Ambush";
var correctAnswer2 = "Wisdom";
var correctAnswer3 = "Crash";

	// 3.1 Variable for user Answers
	
var userAnswer1;
var userAnswer2;
var userAnswer3;

$('.radioSelect1').on('click', function (storeTriviaBtnAnswer) {	
			userAnswer1 = $('input[name="question1"]:checked').val();
			// compareAnswerValues1();
		}); 

$('.radioSelect2').on('click', function (storeTriviaBtnAnswer) {	
			userAnswer2 = $('input[name="question2"]:checked').val();
			// compareAnswerValues2();
		}); 

$('.radioSelect3').on('click', function (storeTriviaBtnAnswer) {	
			userAnswer3 = $('input[name="question3"]:checked').val();
			// compareAnswerValues3();
		}); 			

// 5. compare correctAnswer1 to userAnswer1
			function compareAnswerValues1() {

				if  (userAnswer1 === correctAnswer1) {
						win = win + 1;
						
					} else if (userAnswer1 === undefined || 0){
						unanswered = unanswered + 1;
						
					} else {
						loss = loss + 1;
					} 

			}

			function compareAnswerValues2() {

				if  (userAnswer2 === correctAnswer2) {
						win = win + 1;
						
					} else if (userAnswer2 === undefined || 0){
						unanswered = unanswered + 1;
						
					} else {
						loss = loss + 1;
					} 

			}

			function compareAnswerValues3() {

				if  (userAnswer3 === correctAnswer3) {
						win = win + 1;
						
					} else if (userAnswer3 === undefined || 0){
						unanswered = unanswered + 1;
						
					} else {
						loss = loss + 1;
					} 

			}
					

// 6. end game [submit all values]
	// 6.1 when setTimeOut = 0; see 2.2 above
 

// 7. restart 
		// 7.1 (empty values of trivia answers)


		// 7.2 return to start landing 

			$('.restartBtn').on('click', function () {

			$('.radioSelect1').prop('checked', false);

			$('.radioSelect2').prop('checked', false);

// THIS ISN'T RESETTING THE VARIABLES TO ZERO WHEN RESTART IS CLICKED. I THINK IT HAS TO DO WITH HOW I HANDLED THE UNASWERED PART OF THE SCOREBOARD
			

			$(".scoreBoard").empty();

			$('.starterScreen').css({
				'display': 'block'
			});

			$('.timerScreen').css({
				'display': 'none'
			});
			
			$('.endScreen').css({
				'display': 'none'
			});

			resetVarToZero();
		}); 

function resetVarToZero(){
			// i = 0;
			win = 0;
			loss = 0;
			unanswered = 0;
}



// 1. start button

	// 1.1 when start button is clicked show trivia game

	// 	Add an on click listener to all elements that have the class .startBtn 

		$('.startBtn').on('click', function (makeTriviaAndTimerScreenAppear) {
			
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

		// 5.1 add value of 4.1 as win, lose or unanswered

		function showScoreboard() {
			$(".scoreBoard").html('<h2>All Done!</h2><h3>Wins: ' + win + '</h3> <h3>Losses: ' + loss + '</h3>' + '<h3>Unanswered: ' + unanswered + '</h3>');
		}	



// ATTEMPT TO USE ARRAY

// 3.2 store information from answer 

// var userAnswer1
// var userAnswer2

// // 3.3 answer arrays
// var userAnswers = [];
// var correctAnswerArray = ["Honda", "Volvo"];

// // 4. User's answer for each question is stored in userAnswer1 variable when Button is Clicked

// 	$('.radioSelect').on('click', function (storeTriviaBtnAnswer) {
			
// 			userAnswer1 = $('input[name="question1"]:checked').val();
// 			userAnswer2 = $('input[name="question2"]:checked').val();
// 			console.log(userAnswer1);
// 			console.log(userAnswer2);
// 			// createArrayOfUserAnswers();
// 		}); 
	

// // // putting user answers into an array so that I can compare them to the correct answer 

					

// 					function createArrayOfUserAnswers() {
// 					    userAnswers.push(userAnswer1);
// 					    userAnswers.push(userAnswer2);
// 					    console.log(userAnswers);
// 					}

// 							// COMPARE TO ARRAY OF CORRECT ANSWERS


// 					function compareArray1(){
// 						if (correctAnswerArray[0] === userAnswers[0])
// 							{ win = i++;
// 						}  else if (correctAnswerArray[0] !== userAnswers[0]){
// 							loss = i++;
// 						}
// 						console.log(win);
// 					}
					

// 					// function compareArray2(){
// 					// 	if (correctAnswerArray[1] === userAnswers[1])
// 					// 		{ win = i + 1;
// 					// 	}  else {
// 					// 		loss = i + 1;
// 					// 	}
// 					// }
