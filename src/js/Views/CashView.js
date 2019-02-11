import {elements} from '../Views/base';
export const displayCash = (pCash, dCash) => {
    let playerCash = elements.playerCash;
    let dealerCash = elements.dealerCash;

    const addCashUp = (arr) => {
        let x = arr.reduce((acc, cur)=> acc + cur);
        return x;
    }

    playerCash.textContent = `$${addCashUp(pCash)}`;
    dealerCash.textContent = `$${addCashUp(dCash)}`;

}