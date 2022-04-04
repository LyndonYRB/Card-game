class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }

  createDeck() {
    let suit = ["Hearts", "Spades", "Clubs", "Diamonds"];
    let rank = [
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        this.cards.push(new Card(suit[i], rank[j], score[j]));
      }
    }
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  }
}

const theDeck = new Deck();

console.log("------make the deck------");

// console.log(theDeck.cards);

theDeck.shuffleCards();

console.log("-------shuffle cards-------");

// console.log(theDeck.cards);

let pOneDeck = [];
let pTwoDeck = [];

let firstHalf = () => {
  for (let i = 0; i < 26; i++) {
    pOneDeck.push(theDeck.cards[i]);
  }
};

let secondHalf = () => {
  for (let i = 26; i < 52; i++) {
    pTwoDeck.push(theDeck.cards[i]);
  }
};

firstHalf();
secondHalf();

let playerOne = [...pOneDeck];
let playerTwo = [...pTwoDeck];

console.log("-------player 1s hand-------");
console.log(playerOne);

console.log("-------player 2s hand-------");
console.log(playerTwo);

let p1Pile = [];
let p2Pile = [];

gameRound = (p1Card, p2Card) => {
  console.log("Player one plays " + p1Card.rank + " of " + p1Card.suit);
  console.log("Player two plays " + p2Card.rank + " of " + p2Card.suit);

  if (p1Card.score > p2Card.score) {
    console.log("player one wins round");
    console.log("Player one takes " + p2Card.rank + " of " + p2Card.suit);

    playerOne.push(p1Card, p2Card, ...p1Pile.splice(0), ...p2Pile.splice(0));
    // playerOne.shift();
    // playerTwo.shift();

    console.log("player 1 has " + playerOne.length);
    console.log("player 2 has " + playerTwo.length);
  } else if (p1Card.score < p2Card.score) {
    console.log("player two wins round");
    console.log("Player two takes " + p1Card.rank + " of " + p1Card.suit);

    playerTwo.push(p2Card, p1Card, ...p1Pile.splice(0), ...p2Pile.splice(0));
    // playerTwo.shift();
    // playerOne.shift();

    console.log("player 1 has " + playerOne.length);
    console.log("player 2 has " + playerTwo.length);
  } else if (
    p1Card.score === p2Card.score ||
    (playerOne.length > 3 && playerTwo.length > 3)
  ) {
    console.log("I... DECLARE...WAR!!");
    // Create Pile
    p1Pile.push(...playerOne.splice(0, 4));
    p2Pile.push(...playerTwo.splice(0, 4));
    // console.log(
    //   "Player one plays " +
    //     p1Pile[p1Pile.length - 1].rank +
    //     " of " +
    //     p1Pile[p1Pile.length - 1].suit
    // );
    // console.log(
    //   "Player two plays " +
    //     p2Pile[p2Pile.length - 1].rank +
    //     " of " +
    //     p2Pile[p2Pile.length - 1].suit
    // );

    if (p1Pile[p1Pile.length - 1].score > p2Pile[p2Pile.length - 1].score) {
      console.log("player one wins the war!");
      console.log("Player one takes everthing!");
      playerOne.push(p1Card, p2Card, ...p1Pile.splice(0), ...p2Pile.splice(0));
      // playerOne.shift(0, 3);
      // playerTwo.shift(0, 3);

      console.log("player 1 has " + playerOne.length);
      console.log("player 2 has " + playerTwo.length);
    } else if (
      p1Pile[p1Pile.length - 1].score < p2Pile[p2Pile.length - 1].score
    ) {
      console.log("player two wins the war!");
      console.log("Player two takes everthing!");
      playerTwo.push(p1Card, p2Card, ...p1Pile.splice(0), ...p2Pile.splice(0));
      // playerTwo.shift(0, 3);
      // playerOne.shift(0, 3);

      console.log("player 1 has " + playerOne.length);
      console.log("player 2 has " + playerTwo.length);
    } else {
      playerOne.push(p1Card, ...p1Pile.splice(0));
      playerTwo.push(p2Card, ...p2Pile.splice(0));
    }
  }
};

gamePlay = () => {
  while (playerOne.length && playerTwo.length) {
    let playerOneCard = playerOne.shift();
    let playerTwoCard = playerTwo.shift();

    gameRound(playerOneCard, playerTwoCard);
  }

  if (playerOne.length > 0) {
    console.log("Player One Wins it All!!!");
  } else {
    console.log("Player Two Wins it All!!!");
  }
};

gamePlay();