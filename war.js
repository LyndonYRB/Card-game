deck = ["2 of Spades", "2 of Hearts", "2 of Diamonds", "2 of Clubs",
  "3 of Spades", "3 of Hearts", "3 of Diamonds", "3 of Clubs",
  "4 of Spades", "4 of Hearts", "4 of Diamonds", "4 of Clubs",
  "5 of Spades", "5 of Hearts", "5 of Diamonds", "5 of Clubs",
  "6 of Spades", "6 of Hearts", "6 of Diamonds", "6 of Clubs",
  "7 of Spades", "7 of Hearts", "7 of Diamonds", "7 of Clubs",
  "8 of Spades", "8 of Hearts", "8 of Diamonds", "8 of Clubs",
  "9 of Spades", "9 of Hearts", "9 of Diamonds", "9 of Clubs",
  "10 of Spades", "10 of Hearts", "10 of Diamonds", "10 of Clubs",
  "Jack of Spades", "Jack of Hearts", "Jack of Diamonds", "Jack of Clubs",
  "Queen of Spades", "Queen of Hearts", "Queen of Diamonds", "Queen of Clubs",
  "King of Spades", "King of Hearts", "King of Diamonds", "King of Clubs",
  "Ace of Spades", "Ace of Hearts", "Ace of Diamonds", "Ace of Clubs"]

console.log("deck number = " + deck.length)

playerOne = []
playerTwo = []
console.log("player one = " + playerOne.length)
console.log("player two = " + playerTwo.length)

//shuffle
const shuffled = deck.sort(() => Math.random() - 0.5)
console.log(deck)
//deal
playerOne = deck.splice(0, 26)
playerTwo = deck
console.log(playerOne)
console.log(playerTwo)