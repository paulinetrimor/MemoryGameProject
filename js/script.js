

$(document).ready(function(){

	cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; //card property with array of values

	var count=0;//************************************************************************************
	var clicks=[];
	var timer = {
 		seconds: 0,
  		minutes: 0,
  		clearTime: -1
	};//**********************************************************************************************
		
	function init(){ //initial method that calls the shuffle method
			shuffle();
			assign();
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

	function assign(){ //assigns new values of array into divs
		for (i=0; i<cards.length; i++) {

			$(".back"+(i+1)).append(cards[i]);
		};	
	}

	function clickHandlers(a){ //determines if values in cards are equal
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
	function startTimer(){
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
	function resetTimer() {
  		clearInterval(timer.clearTime);
  		timer.seconds = 0;
  		timer.minutes = 0;
  		$(".timer").text("0:00");

  		timer.clearTime = setInterval(startTimer, 1000);
	}

	/*function showMode() {
 		mode.css("display", "block");
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
	}**************************************************************************************************/


	init();
	startTimer();//timer only shows 1 second..???

	var className = document.getElementsByClassName('num');

	//creates an event listerner for all cards
	for (var i = 0; i < className.length; i++) {
   		className[i].addEventListener('click', clickHandlers, false);
		}
	});



