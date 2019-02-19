import Cards from './Models/Cards';
import Cash from './Models/Cash';
import Scores from './Models/Scores';
import {elements} from './Views/base'
import * as cardView from './Views/CardsView';
import * as scoreView from './Views/ScoresView';
import * as cashView from './Views/cashView';
import '../_assets/fonts/foundation-icons.ttf';


const state = {
    cards: null,
    score: null,
    cash: null,
    deck: [],
    activePlayer: 'player', 
    player: {
        cards: [], 
        totalScore: 0,
        roundScores: [], 
        totalCash: [0]
    },
    dealer: {
        cards: [], 
        totalScore: 0, 
        roundScores: [], 
        totalCash: [0]
    },
    set togglePlayer (x){
        this.activePlayer = x;
    }
}

export const setupGame=()=>{
    let cardValues, cardSuits
    cardValues = ['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace'];
    cardSuits = ['Hearts','Diamonds','Spades','Clubs'];
    state.cards  = new Cards(cardSuits, cardValues);
    state.score = new Scores();
    state.cash = new Cash();

    elements.newGameButton.style.display = 'none';
    elements.continuePlayingButton.style.display = 'none';
    elements.hitButton.style.display = 'inline-block';
    elements.stayButton.style.display = 'inline-block';
    refreshState();

    state.deck = state.cards.createDeck();

    dealCard(state[returnActivePlayer()]);
    dealCard(state[returnActivePlayer()]);
    handleScores(state[returnActivePlayer()]);
    cardView.cardHand(returnActivePlayer(), state.player.cards);
    cardView.showCardImg(state.player.cards, returnActivePlayer());


    // now dealers turn
    togglePlayer();

    dealCard(state[returnActivePlayer()]);
    dealCard(state[returnActivePlayer()]);
    handleScores(state[returnActivePlayer()]);
    cardView.cardHand(returnActivePlayer(), state.dealer.cards);
    cardView.showCardImg(state.dealer.cards, returnActivePlayer());

    togglePlayer();

    scoreView.updateScore(state.player.totalScore, state.dealer.totalScore);

    hideStay();

    // console.log(state);
}

export const returnActivePlayer = () =>{
let x = state.activePlayer
return x;
}

export const toggleUi = () => {
    let x, y
    const handler = (x, y)=>{
    elements[x].box.classList.add('player-box-active');
    elements[x].active.classList.remove('u-hide');
    elements[y].box.classList.remove('player-box-active');
    elements[y].active.classList.add('u-hide'); 
    }
    x = returnActivePlayer();
    if (x === 'player'){
        x = 'player';
        y = 'dealer';
        handler(x, y);
    }
    else {
        x = 'dealer';
        y = 'player';
        handler(x, y);
    }
}

export const togglePlayer = () => {
let x, y
x = returnActivePlayer();

if (x == 'player'){
    state.togglePlayer = 'dealer'
    toggleUi();
}
else {
    state.togglePlayer = 'player'
    toggleUi();
}
}

const dealCard = (loc) => {
    // Picks a Card from Deck
    let cardName = state.cards.pickCard(state.deck);
    // Pushes card to card Strings array in state. 
    state.cards.pushCard(cardName, loc.cards);
    // pushes card integers to round score arrays. 
    loc.roundScores.push(state.score.cardToInt(cardName));

}

const handleScores = (loc) => {
    // takes round score array and adds all of them up. 
    let x = state.score.calcScore(loc.roundScores, loc.totalScore);
    loc.totalScore = x;
}

export const determineWinner = () =>{
    let playerScore, dealerScore 
    playerScore = state.player.totalScore;
    dealerScore = state.dealer.totalScore;
    if (playerScore > dealerScore){
        // console.log('player currently winning');
        if(playerScore > 21){
            sendCash(state.dealer.totalCash, 'dealer');
            endOfGame('$100', 'Dealer Wins', 'Player\'s card total was over 21');
        }
        else if(playerScore === 21){
     
            sendCash(state.player.totalCash, 'player');
            endOfGame('$500', 'Player Wins', 'Dealer wins. Exactly 21');
        }
  
    }
    else if (dealerScore > playerScore){
        // console.log('dealer currently winning');
        if(dealerScore > 21){
      
            sendCash(state.player.totalCash, 'player');
            endOfGame('$100', 'Player Wins', 'Dealer\'s card total was over 21');

        }
        else if(dealerScore === 21){
            sendCash(state.dealer.totalCash, 'dealer');
            endOfGame('$500', 'Dealer Wins', 'Dealer wins. Exactly 21');
   
        }
    }
    else if (dealerScore == playerScore){
        alert('Scores Equal');
    } 
}

export const sendCash = (loc, winner)=>{
    let amount
    const sendCashHandler=(amount)=>{
        loc.push(amount);
        cashView.displayCash(state.player.totalCash, state.dealer.totalCash);
    }
    // console.log(state[winner].totalScore);
    if (state[winner].totalScore == 21){
       amount =  state.cash.fiveHundred();
       sendCashHandler(amount);
    }
    else if(state[winner].totalScore < 21){
         amount =  state.cash.oneHundred();
         sendCashHandler(amount);
    }
}

export const dealerAi = () =>{
    if (state.dealer.totalScore <= 17 || state.dealer.totalScore < state.player.totalScore || state.dealer.totalScore == state.player.totalScore){
        console.log('dealer is less than 17')
        // togglePlayer();
        for (let i = 0; i < state.deck.length; i ++){
            hitMe();
 
            // cardView.showCardImg(state.dealer.cards, returnActivePlayer());
            if (state.dealer.totalScore > state.player.totalScore){
                break;
            }
        }
        togglePlayer();
    }
    else if(state.dealer.totalScore > 17 && state.dealer.totalScore > state.player.totalScore){
        console.log('dealer is greater than 17 & dealer is greater than player')
        // hitMe();
        // togglePlayer();
    }
}


export const hideStay = () => {
    let playerScore, dealerScore 
    playerScore = state.player.totalScore;
    dealerScore = state.dealer.totalScore;

    if (playerScore < dealerScore){
        elements.stayButton.style.display = 'none'
    }
    else if (playerScore > dealerScore || playerScore === dealerScore){
        elements.stayButton.style.display = 'inline-block'
    }
}

export const hitMe = () => {
    let loc = returnActivePlayer();
    dealCard(state[loc]);
    handleScores(state[loc]);
    cardView.cardHand(loc, state[returnActivePlayer()].cards);
    scoreView.updateScore(state.player.totalScore, state.dealer.totalScore);
    cardView.showCardImg(state[returnActivePlayer()].cards, returnActivePlayer());
    determineWinner();
    hideStay();
    console.log(state);
}

export const stay = () => {
    togglePlayer();
    toggleUi();
    setTimeout(function(){
      dealerAi();
    }, 1000);
}

export const endOfGame = (x, y, z) => {
    elements.hitButton.style.display = 'none';
    elements.stayButton.style.display = 'none';
    elements.gameStatusCash.textContent = x;
    elements.gameStatusWinner.textContent = y;
    elements.gameStatusReason.textContent = z;
    elements.newGameButton.style.display = 'inline-block';
    elements.titleFront.style.animationName = 'rotateFront';
    elements.titleBack.style.animationName = 'rotateBack';
    elements.titleFrontMobile.style.animationName = 'rotateFront';
    elements.titleBackMobile.style.animationName = 'rotateBack';
}

export const refreshState =() =>{
    state.deck = [];
    state.activePlayer = 'player', 
    state.player.cards= [];
    state.player.totalScore= 0;
    state.player.roundScores= []; 

    // elements.outcome.textContent = 'Currently playing a new round'

    state.dealer.cards = [];
    state.dealer.totalScore = 0;
    state.dealer.roundScores = []; 

    // console.log('------- REFRESHED STATE -------')
    // console.log(state );

    cardView.clearCards('player', state.player.cards)
    cardView.clearCards('dealer', state.dealer.cards)

}

export const cashViewHandler = () => {
    
    let x = elements.hud.inner.style.animationName;
    console.log(x);
    if ( x === '' || x === 'rotateFrontRev'){

        elements.hud.inner.style.animationName = 'rotateFront';
        elements.hud.back.style.animationName = 'rotateBack'; 
        elements.newGameButton.style.display = 'none';
        elements.hitButton.style.display = 'none';
        elements.stayButton.style.display = 'none';
        elements.continuePlayingButton.style.display = 'inline-block';

    }
    else{
        elements.hud.inner.style.animationName = 'rotateFrontRev';
        elements.hud.back.style.animationName = 'rotateBackRev'; 
        elements.hitButton.style.display = 'inline-block';
        elements.stayButton.style.display = 'inline-block';
        elements.continuePlayingButton.style.display = 'none';
    }

}

export const titleHandler = () => {
    let x = elements.titleFront.style.animationName;
    console.log(`TITLE HANDLER | ${x}`);
    if ( x === '' || x === 'rotateFrontRev'){
        elements.titleFront.style.animationName = 'rotateFront';
        elements.titleBack.style.animationName = 'rotateBack'; 
        elements.titleFrontMobile.style.animationName = 'rotateFront';
        elements.titleBackMobile.style.animationName = 'rotateBack'; 
    }
    else{
        elements.titleFront.style.animationName = 'rotateFrontRev';
        elements.titleBack.style.animationName = 'rotateBackRev'; 
        elements.titleFrontMobile.style.animationName = 'rotateFrontRev';
        elements.titleBackMobile.style.animationName = 'rotateBackRev'; 
        console.log(`TITLE HANDLER ROTATE BACK | ${x}`);

    }
}

