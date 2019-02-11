import Cards from './Models/Cards';
import Cash from './Models/Cash';
import Scores from './Models/Scores';
import {elements} from './Views/base'
import * as cardView from './Views/CardsView';
import * as scoreView from './Views/ScoresView';
import * as cashView from './Views/cashView';

const appController = () => {
    let cardValues, cardSuits
    let state = {
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
    // Setup Game. 
    cardValues = ['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace'];
    cardSuits = ['Hearts','Diamonds','Spades','Clubs'];
    state.cards  = new Cards(cardSuits, cardValues);
    state.score = new Scores();
    state.cash = new Cash();

    const returnActivePlayer = () =>{
       let x = state.activePlayer
        return x;
    }
    const togglePlayer = () => {
        let x = returnActivePlayer();
        if (x == 'player'){
            state.togglePlayer = 'dealer'
        }
        else {
            state.togglePlayer = 'player'
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
    const sendCash = (loc)=>{
        let x = state.cash.oneHundred();
        loc.push(x);
        cashView.displayCash(state.player.totalCash, state.dealer.totalCash);
    }
    const dealerAi = () =>{
        if (state.dealer.totalScore <= 17 || state.dealer.totalScore < state.player.totalScore){
            console.log('dealer is less than 17')
            // togglePlayer();
            for (let i = 0; i < state.deck.length; i ++){
                hitMe();
                cardView.showCardImg(state.dealer.cards, returnActivePlayer());
                if (state.dealer.totalScore > state.player.totalScore){
                    break;
                }
            }
            togglePlayer();
       
        }
    }
    const determineWinner = () =>{
        let playerScore, dealerScore 
        playerScore = state.player.totalScore;
        dealerScore = state.dealer.totalScore;
        if (playerScore > dealerScore){
            console.log('player currently winning');
            if(playerScore > 21){
     
                sendCash(state.dealer.totalCash);
                endOfGame('player loses, over 21');
            }
            else if(playerScore === 21){
         
                sendCash(state.player.totalCash);
                endOfGame('player wins');
            }
      
        }
        else if (dealerScore > playerScore){
            console.log('dealer currently winning');
            if(dealerScore > 21){
          
                sendCash(state.player.totalCash);
                endOfGame('dealer loses over 21');
   
            }
            else if(dealerScore === 21){
                sendCash(state.dealer.totalCash);
                endOfGame('dealer wins exactly 21');
       
            }

        } 
    }
    const hitMe = () => {
        let loc = returnActivePlayer();
        dealCard(state[loc]);
        handleScores(state[loc]);
        cardView.cardHand(loc, state[returnActivePlayer()].cards);
        scoreView.updateScore(state.player.totalScore, state.dealer.totalScore);
        determineWinner();
    
        console.log(state);
    }
    const stay = () => {
        togglePlayer();
        // let loc = returnActivePlayer();
        // cardView.cardHand(loc, state.player.cards);
        // scoreView.updateScore(state.player.totalScore, state.dealer.totalScore);
        dealerAi();
    }
    const endOfGame = (x) => {
        elements.hitButton.style.display = 'none';
        elements.stayButton.style.display = 'none';
        elements.outcome.textContent = x;
        elements.newGameButton.style.display = 'inline-block';
        elements.titleFront.style.animationName = 'rotateFront';
        elements.titleBack.style.animationName = 'rotateBack';
    }
    const refreshState =() =>{
        state.deck = [];
        state.activePlayer = 'player', 
        state.player.cards= [];
        state.player.totalScore= 0;
        state.player.roundScores= []; 

        elements.outcome.textContent = 'Currently playing a new round'

        state.dealer.cards = [];
        state.dealer.totalScore = 0;
        state.dealer.roundScores = []; 

        console.log('------- REFRESHED STATE -------')
        console.log(state );

        cardView.clearCards('player', state.player.cards)
        cardView.clearCards('dealer', state.dealer.cards)
   
    }
   ///////// Setup Game Controller 
   const setupGame=()=>{
        elements.newGameButton.style.display = 'none';
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

        console.log(state);
   }
   setupGame();

   ///////// Hit Button Controller 
   elements.hitButton.addEventListener('click', ()=>{
        hitMe();
        cardView.showCardImg(state.player.cards, returnActivePlayer());
        determineWinner();

        // dealerAi();
   });

   ///////// stay Button Controller 
    elements.stayButton.addEventListener('click', stay);

    ///////// New Game Button Controller 
    elements.newGameButton.addEventListener('click', ()=>{
        setupGame();
        elements.titleFront.style.animationName = 'rotateFrontRev';
        elements.titleBack.style.animationName = 'rotateBackRev';

    });
}
appController();







