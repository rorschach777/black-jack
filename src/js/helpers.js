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

