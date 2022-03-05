
class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}
class Deck {
  constructor() {
    this.length = 52
    this.cards = []
    this.playerOne = []
    this.playerTwo = []
    let suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
    let rank = ['two', 'three', 'four', 'five', 'six',
      'seven', 'eight', 'nine', 'ten', 'Jack', 'Queen', 'King', 'Ace']
    let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        this.cards.push(new Card(suit[i], rank[j], score[j]))
      }
    }
    this.shuffleCards = () => {
      this.cards.sort(() => Math.random() - 0.5)
    }
    this.length = this.cards.length
  }

}

const theDeck = new Deck()

console.log('------make the deck------')

console.log(theDeck.cards)

theDeck.shuffleCards()

console.log('-------shuffle cards-------')

console.log(theDeck.cards)

let pOneDeck = []
let pTwoDeck = []
let firstHalf = () => {
  for (let i = 0; i < 26; i++) {
    pOneDeck.push(theDeck.cards[i])
  }
}
let secondHalf = () => {
  for (let i = 26; i < 52; i++) {
    pTwoDeck.push(theDeck.cards[i])
  }
}
firstHalf()
secondHalf()
let playerOne = pOneDeck
let playerTwo = pTwoDeck

console.log('-------player 1s hand-------')
console.log(playerOne)

console.log('-------player 2s hand-------')
console.log(playerTwo)

gameRound = () => {
  console.log("Player one plays " + playerOne[0].rank + " of " + playerOne[0].suit)
  console.log("Player two plays " + playerTwo[0].rank + " of " + playerOne[0].suit)
  if (playerOne[0].score > playerTwo[0].score) {
    console.log("player one wins rounds")
  } else {
    console.log("player two wins round")
  }
}
gameRound()