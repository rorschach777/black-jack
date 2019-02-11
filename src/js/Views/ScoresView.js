
import {elements} from './base';

export const updateScore = (playerScore, dealerScore) => {
   elements.playerScore.innerHTML = `<h2>${playerScore}</h2>`;
   elements.dealerScore.innerHTML = `<h2>${dealerScore}</h2>`;
}