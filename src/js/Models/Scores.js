export default class Scores {
    constructor () {

    }
    convertCards (cards, loc){
        if (cards.length <= 1){
            cards.forEach((cur)=>{
                let x = this.cardToInt(cur);
                 loc.roundScores.push(x);
              });
        }
        else if (cards.length < 1){
           loc.roundScores.push()
        }
    }
   cardToInt (card, activePlayer){
        let cardArr = card.split(' ');
        let val = cardArr[0];

        switch (val){
            case "Two": 
                return 2;
                break;
            case "Three": 
                return 3;
                break;
            case "Four": 
                return 4;
                break;
            case "Five": 
                return 5;
                break;
            case "Six": 
                return 6;
                break;
            case "Seven": 
                return 7;
                break;
            case "Eight": 
                return 8;
                break;
            case "Nine": 
                return 9;
                break;
            case "Ten": 
                return 10;
                break;
            default: 
                return 10;
                break;
       }
    }
    calcScore(roundScores, loc){
        // Sum up the round scores
        let x = roundScores.reduce((acc,cur) => acc + cur);
        // updated the total score
        return x;
        // state.player.totalScore = x;

    }
}