
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
    


        
    /// CONTINUE BUTTON
    elements.continuePlayingButton.addEventListener('click', logic.cashViewHandler);


    /// CASH VIEW BUTTON
    elements.cashViewBtn.addEventListener('click', logic.cashViewHandler);

    /// RULES VIEW
    elements.rulesViewBtn.addEventListener('click', ()=>{
        elements.modal.style.display = 'block';
    });

    // Modal Show | Hide Modal
    elements.modalClose.addEventListener('click',function (){
        elements.modal.style.display = 'none';
    })



    /// MODAL Show Content
   Array.from(elements.accordianTitle).forEach((cur, idx)=>{
       cur.addEventListener('click', function(e){
        let parent, child
        parent = e.target   
        child = e.target.nextElementSibling
    
           if(child.style.display == ''  ){
            parent.style.color = '#f2007f'
            parent.classList.add('active');
            child.style.display = 'block';
             
           }  else if(child.style.display == 'block'  ) {
            child.style.display = '';
            parent.style.color = '#666666'
            parent.classList.remove('active');
            child.style.animationName = ''
          
           }
           console.log(child);
       }) 
   })
    
}
appController();







