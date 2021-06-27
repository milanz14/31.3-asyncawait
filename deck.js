let deckURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
let drawURL = 'https://deckofcardsapi.com/api/deck/'


const drawCard = async (id) => {
    let drawCard = await axios.get(`${drawURL}/${id}/draw/?count=1`)
    const { suit, value } = (drawCard.data.cards[0]);
    console.log(`${value} of ${suit}`)
}

const drawTwoCards = async (id) => {
    let drawn = [];
    let firstCard = await axios.get(`${drawURL}/${id}/draw/?count=1`);
    drawn.push(firstCard);
    let secondCard = await axios.get(`${drawURL}/${id}/draw/?count=1`);
    drawn.push(secondCard) 
    drawn.forEach(card => {
        console.log(card)
        const { suit, value } = card.data.cards[0];
        console.log(`${value} of ${suit}`)
    })
}


const getDeck = async () => {
    let res = await axios.get(deckURL);
    let deckID = res.data.deck_id;
    drawCard(deckID);
    drawTwoCards(deckID);
}

getDeck();



