
import {elements} from './base';


export const cardHand = (target, cards) => { 
    // Variables
    let markup, trgt

    // Targeted Array used grab a string to display to UI
    trgt = `${target}Cards`

    // Grab the first two cards and insert them. 
    if (cards.length > 2) {
        markup = `<span class="card-string">${cards[cards.length - 1]}</span>`; 
        elements[trgt].insertAdjacentHTML('beforeend', markup)
    }
    // After the first two cards, just grab the last card dealt ... DON'T DISPLAY ALL CARDS IN ARRAY AGAIN. 
    else if (cards.length <= 2){
        cards.forEach((cur, idx)=>{
            markup = `<span class="card-string">${cards[idx]}</span>`;
            elements[trgt].insertAdjacentHTML('beforeend', markup)
        })
    }

}
export const clearCards = (target, cards) => {
    let markup = `<span>Cards: </span>`;
    let x = `${target}Cards`;
    elements[x].textContent = '';
    elements.player.playingCards.innerHTML = '';
    elements.dealer.playingCards.innerHTML = '';
}
export const showCardImg = (arrOfCards, activePlayer) => {
    let markup, separatedStr, indexSelector
    if (arrOfCards.length > 2){
        // console.log(`arr of cards is greater than two ${activePlayer}`);
        indexSelector = arrOfCards.length - 1;
        separatedStr = arrOfCards[indexSelector].split(' ');
        markup = `<div class="card"><img src="./_assets/images/cards/${separatedStr[0]}-of-${separatedStr[2]}.png"></div>`;
        elements[activePlayer].playingCards.insertAdjacentHTML('beforeend', markup)
    }
    else if(arrOfCards.length <= 2){
        // console.log(`arr of cards is less than two ${activePlayer}`);
        arrOfCards.forEach((cur, idx)=> {
            separatedStr = cur.split(' ');
            markup = `<div class="card"><img src="./_assets/images/cards/${separatedStr[0]}-of-${separatedStr[2]}.png"></div>`;
            elements[activePlayer].playingCards.insertAdjacentHTML('beforeend', markup)
         
       })
    }
}