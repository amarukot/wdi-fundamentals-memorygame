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
function checkForMatch() {
	if (cardsInPlay.length === 2) {		
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			alert("Try again.");
		}	
	}
};
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].image);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};
flipCard(0);
flipCard(2);







