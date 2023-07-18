const content = document.getElementById('container');

function isWindowWidthGreaterThan1000px() {
  return window.innerWidth > 1000;
}

function handleScroll(event) {
  if (isWindowWidthGreaterThan1000px()) {
    if (event.deltaY < 0) {
      content.scrollLeft += 700;
    } else if (event.deltaY > 0) {
      content.scrollLeft -= 700;
    }
  }
}

// Add the scroll event listener conditionally
if (isWindowWidthGreaterThan1000px()) {
  window.addEventListener('wheel', handleScroll);
}