

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

	function clickHandlers(a){ //determines if values in cards are equal
		count++;
		click=a.currentTarget.innerHTML;  //gets the value of the current element that was clicked
		clicks =[];

		if (count%2 == 0){ //if count is even then compare
			clicks[1] = click;

			if(clicks[0]== clicks[1]){
				//keep div face up
				console.log('firstClick: '+ clicks[0]+ 'secondClick:' + clicks[1]+ ' does match');
			}
			else{
				//flip both cards face down
				console.log('firstClick: '+ clicks[0]+ 'secondClick:' + clicks[1]+ ' does not match');
			}

		}

		else{ //count is odd
			clicks[0]=click; //this firstclick is not being stored in the array so I cannot access its value inside the other if else statement
			console.log('firstClick: '+ clicks[0]);
			//also keep div face up
		} 
	}
	
	init();
	
	var count=0;
	var className = document.getElementsByClassName('card');

	//creates an event listerner for all cards
	for (var i = 0; i < className.length; i++) {
    className[i].addEventListener('click', clickHandlers, false);
	}

	
	
});


