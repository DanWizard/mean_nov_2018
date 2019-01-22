class Card{
	constructor(suit, string, num){
		this.suit = suit
		this.string = string
		this.num = num		
	}
	show(){
		console.log('Suit: '+this.suit+'\nString: '+this.string+'\nValue: '+this.num)
	}
}

class Deck{
	constructor(){
		var suits = ['Hearts', 'Clubs', 'Diamond', 'Spades'];
		var names = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
		var values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
		this.cards = []
		for( var i = 0; i < suits.length; i++){
			for(var v = 0; v < values.length; v++){
				var card = new Card(suits[i], names[v], values[v]);
				this.cards.push(card);
			}
		}
	}
	showDeck(){
		console.log(this.cards);
		return this;
	}
	shuffle(){
		var copy = [], n = this.cards.length, i;
		while (n) {
			i = Math.floor(Math.random() * this.cards.length);
			if (i in this.cards) {
				var cardRan = new Card(this.cards[i]['suit'], this.cards[i]['string'], this.cards[i]['num'])
				copy.push(cardRan);
				delete this.cards[i];
				n--;
			}
		}
		this.cards = copy
		console.log(this.cards)
		return this
	}
	reset(deck){
		deck.cards = new Deck();
		console.log('Reset!');
		return this;
	}
	deal(){
		var n = this.cards.length, i;  
		i = Math.floor(Math.random() * this.cards.length);
		console.log('your card is:'+'\nSuit: '+this.cards[i]['suit']+'\nName: '+this.cards[i]['string']+'\nValue: '+this.cards[i]['num'])
		return this.cards.splice(i,1)
		 
	}

}

class Player{
	constructor(name){
		this.name = name;
		this.hand = [];
	}
	take(){
		this.hand.push(new Deck().deal());
		console.log(this.hand);
		return this; 
	}
	toss(place){
		if(this.hand[place]){
			var n = this.hand.length
			console.log('tossed!')
			delete this.hand[place]
			n--
		}
		else{
			console.log('no hand!')
		}
		return this;

	}
	peak(){
		console.log(this.hand);
	}
}

Daniel = new Player();
Daniel.take().take().toss(0).peak()


