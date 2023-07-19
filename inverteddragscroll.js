// INVERTED "drag to scroll" -- such that dragging left/right scrolls up/down.
const container = document.querySelector('#image-wrapper');

let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

container.addEventListener('mousedown',e => mouseIsDown(e));  
container.addEventListener('mouseup',e => mouseUp(e))
container.addEventListener('mouseleave',e=>mouseLeave(e));
container.addEventListener('mousemove',e=>mouseMove(e));

function mouseIsDown(e){
    isDown = true;
    startY = e.pageY - container.offsetTop;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollTop;
    scrollTop = container.scrollLeft; 
}
function mouseUp(e){
    isDown = false;
}
function mouseLeave(e){
    isDown = false;
}
function mouseMove(e){
    if(isDown){
    e.preventDefault();
    //Move vertcally
    const y = e.pageY - container.offsetTop;
    const walkY = y - startY;
    container.scrollLeft = scrollTop - walkY;

    //Move Horizontally
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;
    container.scrollTop = scrollLeft - walkX;

    }
}