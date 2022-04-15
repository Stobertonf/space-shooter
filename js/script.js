const yourShip = document.querySelector('.placeholder-shoter');
const playArea = document.querySelector('#main-play-area');


//movimento e tiro da nave
function flyAhip(event){
    if(event.key == 'ArrowUp'){
        event.preventDefault();
        moveUp();
    } else if(event.key == 'ArrowDown'){
        event.preventDefault();
        moveDown();
    } else if(event.key == " "){
        event.preventDefault();
        fireLaser();
    }
}
//função de subir
function moveUp(){
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top'); //devolve o código css
    if(topPosition === "0px"){
        return
    } else{
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = '${position}px'
    }
 }

 //função de descer

 function moveDown(){
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top'); //devolve o código css
    if(topPosition === "510px"){
        return
    }else {
        let position = position(topPosition);
        position += 50;yourShip.style.top = '${position}px'
    }
}

//função de atirar em todo mundo

function fireLaser(){
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser();
}

window.addEventListener('keydown')

   
