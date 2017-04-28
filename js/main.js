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

//array to track the score
var scoredPoints = [];

//checking if both cards selected are the same
var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1] || cardsInPlay[2] === cardsInPlay[3]){
		alert('You found a match!');
		//this is to track the points, to push it to array so we can get the length, length = score
		scoredPoints.push('point');
		var score = scoredPoints.length;
		document.getElementById("score").innerHTML = score;
	}
	else{
		alert('Sorry, try again :(');
	}
}
//when user flips the card
var flipCard = function(){
var cardId = this.getAttribute('data-id');
//this would be to randomize cards, but when running this checkForMatch doesn't work
//var cardId = Math.floor(Math.random()*cards.length);

console.log("User flipped " + cards[cardId].rank);

//card goes to our cards in play array
cardsInPlay.push(cards[cardId].rank);

this.setAttribute('src', cards[cardId].cardImage);

//check if user has chosen even number of cards
if(cardsInPlay.length === 2 || cardsInPlay.length === 4){
	checkForMatch();
	}
}
//creating the board of cards
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

//reseting board
var reset = function(){
	var button = document.getElementsByTagName('button');
	location.reload();
	button.addEventListener('click', reset);
}

