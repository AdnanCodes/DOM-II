//Adding event listeners to each of the rockets aka blocks
let clickCount = 0; //clickCount alter the order property so it whichever rocket is clicked even if it has been clicked before will always go to top.


const rocketRed = document.querySelector('.block--red');


rocketRed.addEventListener('click', () => moveRocketUp(rocketRed));

const rocketBlue = document.querySelector('.block--blue');

rocketBlue.addEventListener('click', () => moveRocketUp(rocketBlue));


const rocketGreen = document.querySelector('.block--green');

rocketGreen.addEventListener('click', () => moveRocketUp(rocketGreen));

const rocketPink = document.querySelector('.block--pink');

rocketPink.addEventListener('click', () => moveRocketUp(rocketPink));

const rocketGray = document.querySelector('.block--gray');

rocketGray.addEventListener('click', () => moveRocketUp(rocketGray));


//This function sets the order which causes it to move up by altering it order via flex-box
function moveRocketUp(target){

    target.style.order = '-1' + clickCount;
    clickCount++;
    
    console.log('clicked')
};