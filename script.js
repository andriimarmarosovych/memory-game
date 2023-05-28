const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    // {
    //     name: 'cheeseburger.png',
    //     img: 'images/cheeseburger.png',
    // },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    // {
    //     name: 'cheeseburger',
    //     img:  'images/cheeseburger.png',
    // },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let chosenCard = [];
let chosenCardsIds = [];
const cardPair = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}


function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = chosenCardsIds[0]
    const optionTwoId = chosenCardsIds[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('same img')
    } else if (chosenCard[0] == chosenCard[1]) {
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardPair.push(chosenCard)
    } else {
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again')
    }

    chosenCard = [];
    chosenCardsIds = [];
    resultDisplay.textContent = cardPair.length

    if (cardPair.length === cardArray.length/2) {
        resultDisplay.textContent = 'You have completed the game!';
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    chosenCard.push(cardArray[cardId].name);
    chosenCardsIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (chosenCard.length === 2){
        setTimeout(checkMatch, 600)
    }
}

createBoard()