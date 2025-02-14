// const DECK = [
//     'JD', '2D', '9H', 'JC', '5D', '7H', '7C', '5H',
//     'KD', 'KC', '9S', '5S', 'AD', 'QC', 'KH', '3H',
//     '2S', 'KS', '9D', 'QD', 'JS', 'AS', 'AH', '3C',
//     '4C', '5C', 'TS', 'QH', '4H', 'AC', '4D', '7S',
//     '3S', 'TD', '4S', 'TH', '8H', '2C', 'JH', '7D',
//     '6D', '8S', '8D', 'QS', '6C', '3D', '8C', 'TC',
//     '6S', '9C', '2H', '6H'
// ];

const DECK =
    ['AC', ' AD', ' AH', ' AS', ' 2C', ' 2D', ' 2H', ' 2S', '3C', ' 3D', ' 3H', ' 3S', ' 4C',
        '4D', ' 4H', ' 4S', ' 5C', ' 5D', ' 5H', ' 5S', ' 6C', '6D', ' 6H', ' 6S', ' 7C', ' 7D',
        '7H', ' 7S', ' 8C', ' 8D', ' 8H', ' 8S', ' 9C', ' 9D', '9H', ' 9S', ' TC', ' TD', ' TH',
        'TS', ' JC', ' JD', ' JH', ' JS', ' QC', ' QD', ' QH', 'QS', ' KC', ' KD', ' KH', ' KS']

const mult = 214013
const inc = 2531011
const mod = 2 ** 31
const divState = 2 ** 16

function deal(n: number): string[] {
    let deck = [...DECK];

    const dealtCards: string[] = [];

    let state = n;

    while (deck.length > 0) {
        const randomNumber = getRandomNumber(state, deck.length);
        const card = deck[randomNumber];
        dealtCards.push(card);
        deck[randomNumber] = deck[deck.length - 1];
        deck.pop();
        state = (state * mult + inc) % mod;
    }
    console.log(dealtCards);
    return dealtCards;
}

function getRandomNumber(state: number, deckLength: number): number {
    const mult = 214013;
    const inc = 2531011;
    const mod = 2 ** 31;
    const divState = 2 ** 16;
    const newState = (state * mult + inc) % mod;
    const randomNumber = Math.floor(newState / divState) % deckLength;

    return randomNumber;
}


deal(1)
