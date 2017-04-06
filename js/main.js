// array of card objects
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
];
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

console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
//card goes to our cards in play array
cardsInPlay.push(cards[cardId].rank);
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
