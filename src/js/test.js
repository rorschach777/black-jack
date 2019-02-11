let btn = document.querySelector('#new-game-button');
let btn2 = document.querySelector('#hit-button');
let titleFront = document.querySelector('.black-jack-title-front');
let titleBack = document.querySelector('.black-jack-title-back');

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
