

 /*elements in array represent the symbols in the cards
let card_shuffled= []; /*empty array for storing memory values
let card_tiles =[]; /*empty array for storing tile ids
let card_flip = 0; /*used to keep track of cards flipped*/


$(document).ready(function(){
	var game = { /*creating object game, the functions are methods of this object*/
	cards: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], /*creating array of card values*/

	/*initial function will call the shuffle function the cards*/
	init: function(){ 
		game.shuffle()
	},
	/*function that randomly shuffles the cards and assigns them to the div*/
	shuffle: function(){
		var j, x, i;
    	for (i = game.cards.length - 1; i > 0; i--) {
        	j = Math.floor(Math.random() *(i + 1));
       		x = cards[i];
       		cards[i] = cards[j];
       		cards[j] = x;
    	}
    	game.assignCards();
		console.log('Shuffled Card Array: '+game.cards);		

	},

	/*for(var i=0; i<17; i++){

		$('#card'+i).text('yeah'+i);
	}*/
	
	}
});





/*create function that shuffles the deck when window is loaded
$(document).ready(function(){
	var app = { }
	let card_array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

    $("button").click(function(){
        $("p").slideToggle();
    });
});


function shuffle(a) {
    var j, x, i;
    for (let i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    
    return a;
}

/*generates a new board*/
/*function newBoard(a){

	for(const i=0; i< a.length; i++)
		$(#i)



}

card_array.forEach(function newBoard(){

	const output = document.getElementByClassName('container').querySelector('.card');

	for(const i=0; i<card_shuffled.length; i++){
		
		output[i].document.value

	}
	
		//insert value into container
		container.appendChild(a);
	}};
};



click handler function
clickHandler.function(){

}

/*command shuffles cards then puts numbers on divs
console.log(card_array);
shuffle(card_array);
/*newBoard(card_array);

add event listerners*/

