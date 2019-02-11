export const elements = {
   dealerCards : document.querySelector('#dealer-card-hand'),
   dealerScore :  document.querySelector('#dealer-total-score'),
   dealerCash : document.querySelector('#dealer-total-cash'),
   player : {
      playingCards: document.querySelector('#player-playing-cards')
   },


   playerCards : document.querySelector('#player-card-hand'),
   playerScore :  document.querySelector('#player-total-score'),
   playerCash : document.querySelector('#player-total-cash'),
   dealer : {
      playingCards: document.querySelector('#dealer-playing-cards')
   },

   newGameButton : document.querySelector('#new-game-button'),
   hitButton : document.querySelector('#hit-button'),
   stayButton : document.querySelector('#stay-button'),

   outcome: document.querySelector('#round-outcome'), 

   titleFront : document.querySelector('.black-jack-title-front'),
   titleBack : document.querySelector('.black-jack-title-back')
}