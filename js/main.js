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
var flipCard = function(){
var cardId = this.getAttribute('data-id');


console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
//card goes to our cards in play array
cardsInPlay.push(cards[cardId].rank);

this.setAttribute('src', cards[cardId].cardImage);

//check if user has chosen 2 cards
if(cardsInPlay.length === 2){
	checkForMatch();
}
	else{
		//to be completed!
	}
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', [i]);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();