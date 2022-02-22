//Class of Deck
class Deck{
    constructor(deck = null, suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'], faces = [{face: 'A', value: 1},{face: '2', value: 2}, {face: '3', value: 3}, {face: '4', value: 4}, {face: '5', value: 5}, {face: '6', value: 6},{face: '7', value: 7},{face: '8', value: 8},{face: '9', value: 9},{face: '10', value: 10},{face: 'J', value: 11},{face: 'Q', value: 12},{face: 'K', value: 13}]){
        //Array of cards
        this.deck = []
        this.piles = []
        //Use arrays of different suits and values to generate cards
        if (deck === null){
            let nextDeckIndex = 0
            for (let suit in suits){
                for (let face in faces ){
                    this.deck[nextDeckIndex++] = new Card(suits[suit], faces[face].face, faces[face].value)

                }
            }
        }else {
            this.deck = deck
        }
    }
    //Given a deck remove and return the card at the beginning of the deck without using any built-in methods
    removeFirstCard(deck){
        let firstCard = deck[0]
        for (let i = 0; i < deck.length -1; i++){
            deck[i] = deck[i+1]
        }
        deck.length = deck.length -1
        //console.log(deck)
        return firstCard
    }
    //make a new hand of cards
    makeNewPile(numOfCards, handName = null){
        //loop through numOfCards
        let cards = []
        for (let i = 0; i< numOfCards; i++){
            //make new array by pulling cards from deck and pushing them into array
            cards.push(this.removeFirstCard(this.deck))
        }
        //call the Pile class and pass array
        let hand = new Pile(cards, handName)
        this.piles.push(hand)
        return hand
    }
    //shuffle deck of cards
}

class Pile extends Deck{
    constructor (cards, handName){
        //Call the Deck constructor and pass the given array
        super(cards)
        this.handName = handName
    }
    //remove a specific card from the pile
    removeAt(targetIndex){
        //Store the card at targetindex in a vaariable
        let removedCard = this.deck[targetIndex]
        //loop through this pile's deck  starting at targetindex
        for (let i = targetIndex; i < this.deck.length - 1; i++){
            this.deck[i] = this.deck[i +1] 
        }
        //shorten this pile's deck  by one 
        this.deck.length -= 1
        //return removed card
        return removedCard
    }

    //insert a card in a specific place in the pile
    insertAt(deck,card, index){
        //create a new array with one more length than the given deck
        const newDeck = [this.deck.length +1]
        
        for (let i = 0; i < index; i++){
            newDeck[i] = this.deck[i] 
        
        }
        newDeck[index] = card
        console.log[newDeck[index]]
        for (let i = index +1; i < this.deck.length; i++){
            newDeck [i] = this.deck[i-1]
        }
        return newDeck
    }

    //search through this pile of cards and return the index of the card
}

//Class of Card 
class Card{
    constructor (suit, face, value){
        this.suit = suit
        this.face = face
        this.value = value
    }
}
let cardDeck = new Deck()
//console.log(cardDeck.removeFirstCard(cardDeck.deck))
//console.log(cardDeck.removeFirstCard(cardDeck.deck))
let hermineHand = cardDeck.makeNewPile(5, "hermine")
//console.log("this is hermine s hand ")
//console.log(hermineHand.removeAt(3, "hermine"))
//console.log(hermineHand)

let card = new Card('Hearts','J', 11 )
hermineHand.insertAt(hermineHand, card, 5)
console.log(hermineHand)

