let btn = document.querySelector('#new-game-button');
let btn2 = document.querySelector('#hit-button');


btn.addEventListener('click', ()=>{
    console.log('hi')
    titleFront.style.animationName = 'rotateFront';
    titleBack.style.animationName = 'rotateBack';
});

btn2.addEventListener('click', ()=>{
    console.log('hi')
    titleFront.style.animationName = 'rotateFrontRev';
    titleBack.style.animationName = 'rotateBackRev';
});
