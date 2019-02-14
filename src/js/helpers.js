import {elements} from './Views/base';


export const cashViewHandler = () => {
    
    let x = elements.hud.inner.style.animationName;
    console.log(x);
    if ( x === '' || x === 'rotateFrontRev'){

        elements.hud.inner.style.animationName = 'rotateFront';
        elements.hud.back.style.animationName = 'rotateBack'; 
        elements.hitButton.style.display = 'none';
        elements.stayButton.style.display = 'none';

    }
    else{
        elements.hud.inner.style.animationName = 'rotateFrontRev';
        elements.hud.back.style.animationName = 'rotateBackRev'; 
        elements.hitButton.style.display = 'inline-block';
        elements.stayButton.style.display = 'inline-block';
    }

}

