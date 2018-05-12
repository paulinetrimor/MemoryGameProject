

 /*elements in array represent the symbols in the cards
let card_shuffled= []; /*empty array for storing memory values
let card_tiles =[]; /*empty array for storing tile ids
let card_flip = 0; /*used to keep track of cards flipped*/


$(document).ready(function(){
	var game = { //creating object called game
		cards: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], //card property with array of values
		
		init: function(){ //initial method that calls the shuffle method
			game.shuffle();
		},
		
		shuffle: function(){ //shuffle method that shuffles the deck
			var j= 0;
			var x=0;
			var i=0;
    		for (i = 0; i< game.cards.length; i++) {
        		j = Math.round(Math.random()*i);
       			x = game.cards[i];
       			game.cards[i] = game.cards[j];
       			game.cards[j] = x;
    		};
    		game.cards.assign();
			console.log('Shuffled Card Array: '+game.cards);		

	}
	/*for(var i=0; i<17; i++){

		$('#card'+i).text('yeah'+i);
	}*/
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

