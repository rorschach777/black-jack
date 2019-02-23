
export default class Cards {
    constructor(suits, values){
        this.suits = suits;
        this.values = values;
    }
    ///// Dynamically Generated Deck of Cards
    createDeck (){
        // Empty Deck
        let emptyDeck = [];
        // Cycles through Card Strings and Values to generate a deck... Push to empty deck. 
        for (let x = 0; x < this.suits.length; x++ ){
            for (let i = 0; i < this.values.length; i++){
                    emptyDeck.push(`${this.values[i]} of ${this.suits[x]}`);
            }
        }
        // return a full deck
        return emptyDeck;
    }
    pickCard (deck) {
        // Generate a random Number the length of the deck. 
        let x = Math.trunc(Math.random() * deck.length);
        // Select A Card from the Deck with the Random Number. 
        const card = deck[x];

        this.removeCard(x, deck);

        return card;
    }
    removeCard (ranIdx, cardDeck) {
        cardDeck.splice(ranIdx, 1);
    }
    pushCard(card, loc){
     loc.push(card);
    
    }
}
