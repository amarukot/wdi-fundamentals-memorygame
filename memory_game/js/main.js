const cards = [
{
	suit: "hearts",
	rank: "king",
	image: "images/king-of-hearts.png"
},
{
	suit: "hearts",
	rank: "queen",
	image: "images/queen-of-hearts.png"
},
{
	suit: "diamonds",
	rank: "queen",
	image: "images/queen-of-diamonds.png"
},
{
	suit: "diamonds",
	rank: "king",
	image: "images/king-of-diamonds.png"
}];
const cardsInPlay = []; 
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {		
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Try again.");
		}	
	}
};
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].image);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};
var createBoard = function(){
	for (i=0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();









