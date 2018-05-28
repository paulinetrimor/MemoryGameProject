

$(document).ready(function(){

	// Declare global variables
	var count = 0;
	var cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

	// magic number; -1 denotes the default, unset value for a click
	var clickArray = [-1, -1];

	// there are 8 pairs, when pairs reach 0, game is over!
	var numPairs = 8;

	var timer = {
 		seconds: 0,
  		minutes: 0,
  		clearTime: -1
	};

	// Object variable to hold reference to the first clicked card
	var FirstCard = null;

	function init(){ //initial method that calls the shuffle method
			shuffle();
			assign();
			//TO DO: initializze timer
	}
		
	function shuffle(){ //shuffle method that shuffles the deck
		var j= 0;
		var x=0;
	
    	for (i=0; i<cards.length; i++) {
        	j = Math.floor(Math.random()*i);
       		x = cards[i];
       		cards[i] = cards[j];
       		cards[j] = x;
    		};
			console.log('Shuffled Card Array: '+ cards);		
	}

	function assign() {
		for (i = 0; i < cards.length; i++) {

			var cardId = "#card" + (i + 1);
			var cardElement = $(cardId);
			
			// enclose value inside a <span> element
			cardElement.html("<span>" + cards[i] + "</span>");

			// DEBUG
			 console.log("value = " + cards);

			// let this function create the handlers dynamically
			createHandler(cardElement);
		}	
	}

	function createHandler(cardElement) {
		cardElement.click(function(e) {
			var isEqual = false;

			// To prevent clicking same card twice, disable!
			$(this).off();

			// Ensure count doesn't get too high
			count = count % 100;
			count++; 

			// store value of card
			cardValue = $(cardElement).children('span').text();

			//flip the card when clicked
			//$(cardElement).css("visibility", "hidden");
			


			// DEBUG, print expected value of card!
			console.log("CardValue: " + cardValue);

			// determine to set first or second click
			if ((count % 2) == 1) { // odd, first click
				clickArray[0] = cardValue;
				// stash reference to this card's handler for later reactivation
				FirstCard = $(this);
			}

			else { // even, second click
				clickArray[1] = cardValue;

				// cards are set, lets compare!			
				if (compareCards(cardElement, cardValue)) {
					console.log("[+] Match!");
					// Do not turn card click back on, they are both out of the game!
					numPairs--; // decrement pairs
					if (numPairs == 0) {
						console.log("Game over, you won!");
						// GAME OVER!
						// gameOver() needed
					}
				} 

				else {
					console.log("[-] No match, try again!");
					// Turn this card, and the card pointed to by FirstCard on
					createHandler(FirstCard); // activate the card clicked before this
					createHandler($(this)); // activate this card again
				}
			}
		}); // end cardElement.click()
	}

	// return 0 (False) for not equal, return 1 (True) for equal
	function compareCards(cardElement, cardValue) {
		// compareCards should never be called with both elements unset (-1)
		// lets error check
		var retVal = false;
		var firstClick = clickArray[0];
		var secondClick = clickArray[1];

		if (firstClick < 0 || secondClick < 0) {
			// DEBUG
			console.log("ERROR, compareCards called on empty values: " + firstClick + ", " + secondClick);
			return 0;
		}

		else {
			// This is called a ternary statement; its a short-hand way of doing if-else statements.
			// The corresponding if-else code is below for comparison.

			retVal = (firstClick == secondClick) ? true : false;
			
			// OR
			// (firstClick == secondClick) ? retVal = true : retVal = false;

			// if (firstClick == secondClick) {
			//  	retVal = true;
			// } 

			// else {
			//  	retVal = false;
			// }
		}

		// At the end, we must reset clickArray
		clickArray[0] = -1;
		clickArray[1] = -1;

		// TODO: Decrement turns count
		return retVal;
	}

	//flip function when clicked
	//	jQuery(function(){ jQuery(".card").flip({ trigger: 'click' }); });


	/*function clickHandlers(a){ //determines if values in cards are equal
		count++;
		click=a.currentTarget.innerHTML;  //gets the value of the current element that was clicked
		//updateMoveCounter(); //update the moves
		
		if (count%2 == 0){ //if count is even then compare
			clicks[1] = click;

			if(clicks[0]== clicks[1]){
				//keep div face up
				console.log('firstClick: '+ clicks[0]+ 'secondClick:' + clicks[1]+ ' does match');
			}
			else{
				//flip both cards face down
				//$('.card').toggleClass('flipped');
				console.log('firstClick: '+ clicks[0]+ 'secondClick:' + clicks[1]+ ' does not match');
			}
		}

		else{ //count is odd
			clicks[0]=click; 
			//$('.card').toggleClass('flipped');
			//$('.card').flip(); flip the chosen card		
			console.log('firstClick: '+ clicks[0]);
			//also keep div face up
		} 
	}

	//starts the timer as soon as card is clicked******************************************************
	async function startTimer(){
		if (timer.seconds === 59) {
    		timer.minutes++;
    		timer.seconds = 0;
  		} 
  		else {
    		timer.seconds++;}
    	// Ensure that single digit seconds are preceded with a 0
  		var formattedSec = "0";

  		if (timer.seconds < 10) {
    		formattedSec += timer.seconds;
  		} 
  		else {
    		formattedSec = String(timer.seconds);}

  		var time = String(timer.minutes) + ":" + formattedSec;
 			$(".timer").text(time);
	}

	//resets timer
	/*function resetTimer() {
  		clearInterval(timer.clearTime);
  		timer.seconds = 0;
  		timer.minutes = 0;
  		$(".timer").text("0:00");

  		timer.clearTime = setInterval(startTimer, 1000);
	}*/

	/*function showMode() {
 		modal.css("display", "block");
	}

	// Removes last start from remaining stars, updates mode HTML
	function removeStar() {
  		$(".fa-star")
    	.last()
    	.attr("class", "fa fa-star-o");
  		numStars--;
  		$(".num-stars").text(String(numStars));
	}

	// Restores star icons to 3 stars, updates modal HTML
	function resetStars() {
 		$(".fa-star-o").attr("class", "fa fa-star");
		numStars = 3;
 		$(".num-stars").text(String(numStars));
	}

	// Updates number of moves in the HTML, removes star if necessary based on difficulty variables
	function updateMoveCounter() {
  		$(".moves").text(moveCounter);
  		if (moveCounter === hard || moveCounter === medium) {
    	removeStar();
  		}
	}*/

	init();
	// Move this to init() once it works
	// Hint: startTimer() will likely need to be an async. function. We will get to that later!
	//startTimer();//timer only shows 1 second..???

	//var className = document.getElementsByClassName('num');

	//creates an event listerner for all cards
	/*for (var i = 0; i < className.length; i++) {
   		className[i].addEventListener('click', clickHandlers, false);
	}*/
	}); // end $(document).ready()




