const myDeck = {
	deck: [],
	suits: [ 'hearts', 'diamods', 'spades', 'clubs' ],
	values: "2,3,4,5,6,7,8,9,10,J,Q,K,A'".split(','),
	deadCards: [],

	take() {
		const { deck, suits, values } = this;
		for (let suit of suits) {
			for (let value of values) {
				deck.push({
					suit,
					value
				});
			}
		}
	},

	shuffle() {
		const { deck } = this;
		for (let x = deck.length - 1; x > 0; x--) {
			let y = Math.floor(Math.random() * (x + 1));
			[ deck[x], deck[y] ] = [ deck[y], deck[x] ];
		}
	},

	drawOneCard() {
		const { deck, deadCards } = this;
		const card = deck.shift();
		deadCards.push(card);
		return card;
	},

	drawCards(numOfCards) {
		const cards = [];
		for (let x = 0; x < numOfCards; x++) {
			cards.push(this.drawOneCard());
		}
	}
};
