

$(document).ready(function(){

	cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; //card property with array of values
		
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
			$('#card'+(1+i)).text(cards[i]); 
		};

	}

	//problem with the script not running this
	/*function myFlip(){ //determines if value is equal to the other card
			var x = id.innerHTML;
			console.log(x);
	}*/

	function myFlip(){ //determines if values in cards are equal
		console.log('it works');
	};
	
	init();

	var el = document.getElementById('card1').textContent;
	el.addEventListerner('click', myFlip);
	
	
});


