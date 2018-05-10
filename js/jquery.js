
const card_symbols = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; /*elements in array represent the symbols in the cards*/
const card_values= []; /*empty array for storing memory values*/
const card_tiles =[]; /*empty array for storing tile ids*/
const card_flip = 0; /*used to keep track of cards flipped*/



/*Fisher-Yates shuffle method*/
array.property.card_shuffle = function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
/*generates a new board*/
function newBoard(){
	card_tiles =0; /*all tiles are face down*/
	const output='';
	card_symbols.card_shuffle();
	for(const i=0; i<card_symbols.length; i++){
		output += '<div class="tile_'+i+'"onclick="memoryFlipTile(this, \''+card_symbols[i]+'\')"></div>';
		/*each tile will get an id that contain a random value from generated array*/
	}
	document.getElementByClassName('card').innerHTML=output;

}