
import {elements} from './Views/base'
import * as logic from './logic'


const appController = () => {
   logic.setupGame();

    //// HIT BUTTON
    elements.hitButton.addEventListener('click', ()=>{
        logic.hitMe();
        logic.determineWinner();
    });

    //// STAY BUTTON
    elements.stayButton.addEventListener('click', logic.stay);

    /// NEW GAME BUTTON
    elements.newGameButton.addEventListener('click', ()=>{
        logic.setupGame();
        logic.titleHandler();
    });

    /// SEE CASH BUTTON
    elements.seeCashBtn.addEventListener('click', ()=>{
        logic.cashViewHandler();
    });
    
    /// CASH VIEW BUTTON
    elements.cashViewBtn.addEventListener('click', logic.cashViewHandler);

        
    /// CONTINUE BUTTON
    elements.continuePlayingButton.addEventListener('click', logic.cashViewHandler);

    /// Modal
   Array.from(elements.accordianTitle).forEach((cur, idx)=>{
       cur.addEventListener('click', function(e){
    
           let el = e.target.nextElementSibling
    
           if(el.style.display == ''  ){
             el.style.display = 'block'
           }  else if(el.style.display == 'block'  ) {
            el.style.display = '';
            el.style.animationName = ''
          
           }
           console.log(el);
       }) 
   })
    
}
appController();







