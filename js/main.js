// array of cards
var cards = ['queen', 'queen', 'king', 'king'];
//array of cards in play
var cardsInPlay = [];
//checking if both cards selected are the same
var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert('You found a match!');
	}
	else{
		alert('Sorry, try again :(');
	}
}
//when user flips the card
var flipCard = function(cardId){

console.log("User flipped " + cards[cardId]);
//card goes to our cards in play array
cardsInPlay.push(cards[cardId]);
//check if user has chosen 2 cards
if(cardsInPlay.length === 2){
	checkForMatch();
}
	else{
		//to be completed!
	}
}

flipCard(0);
flipCard(2);
