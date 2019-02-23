export const elements = {
   accordianTitle: document.querySelectorAll('.accordian__inner__title'),
   accordianContent: document.querySelectorAll('.accordian__inner__content'),
   accordianContent1: document.querySelector('#accordian-content-1'),
   
   dealerCards : document.querySelector('#dealer-card-hand'),
   dealerScore :  document.querySelector('#dealer-total-score'),
   dealerCash : document.querySelector('#dealer-total-cash'),
   seeCashBtn: document.querySelector('.see-cash'),
   cashViewBtn: document.querySelector('#btn-cash-view'),


   hud : {
      inner: document.querySelector('#hud-inner'),
      back: document.querySelector('#hud-back'), 
 
   },

   player : {
      playingCards: document.querySelector('#player-playing-cards'),
      box: document.querySelector('#box-player'),
      title : document.querySelector('#title-player'),
      active: document.querySelector('#player-active'),
      cashArea: document.querySelector('#cash-area-player')

   },


   playerCards : document.querySelector('#player-card-hand'),
   playerScore :  document.querySelector('#player-total-score'),
   playerCash : document.querySelector('#player-total-cash'),
   dealer : {
      playingCards: document.querySelector('#dealer-playing-cards'), 
      box: document.querySelector('#box-dealer'),
      title : document.querySelector('#title-dealer'),
      active: document.querySelector('#dealer-active'),
      cashArea: document.querySelector('#cash-area-dealer')
   },



   newGameButton : document.querySelector('#new-game-button'),
   hitButton : document.querySelector('#hit-button'),
   stayButton : document.querySelector('#stay-button'),
   continuePlayingButton: document.querySelector('#continue-playing-button'),

   gameStatusCash: document.querySelector('#game-status-amount-won'), 
   gameStatusWinner: document.querySelector('#game-status-who-won'),
   gameStatusReason: document.querySelector('#game-status-reason'), 

   titleFront: document.querySelector('.black-jack-title-front'),
   titleBack: document.querySelector('.black-jack-title-back'),

   titleFrontMobile: document.querySelector('.black-jack-mobile-inner-side-front'),
   titleBackMobile: document.querySelector('.black-jack-mobile-inner-side-back')
   
}

