// FOR NEXT/BACK BUTTONS
let slideIndex = 1;
function showDivs(n) {
    let i;
    const item = document.getElementsByClassName("slideshow-item");
    if (n > item.length) {slideIndex = 1}
    if (n < 1) {slideIndex = item.length}
    for (i = 0; i < item.length; i++) {
        item[i].style.display = "none";  
    }
    item[slideIndex-1].style.display = "flex";  
}
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
// Old JS ^

// FOR SWIPE (ChatGPT):

const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // Adjust scrolling speed here
  slider.scrollLeft = scrollLeft - walk;
});
