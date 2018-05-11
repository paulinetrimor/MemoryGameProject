

const card_array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; /*elements in array represent the symbols in the cards*/
const card_shuffled= []; /*empty array for storing memory values*/
const card_tiles =[]; /*empty array for storing tile ids*/
const card_flip = 0; /*used to keep track of cards flipped*/


/*create function that shuffles the deck*/


/*Fisher-Yates shuffle method*/
function shuffle(a) {
    var j, x, i;
    for (const i = a.length - 1; i > 0; i--) {
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

/*command shuffles cards then puts numbers on divs*/
console.log(card_array);
shuffle(card_array);
/*newBoard(card_array);

/*add event listerners*/

