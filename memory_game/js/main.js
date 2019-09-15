const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = []; 
function checkForMatch() {
	if (cardsInPlay.length === 2) {		
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Try again.");
		}	
	}
};
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};
flipCard(0);
flipCard(2);








