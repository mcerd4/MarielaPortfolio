onst title = document.querySelector('#title');
const rate = 0.3; // lower = faster fade

document.addEventListener('scroll', () => {
  title.style.opacity = 100/window.scrollY*rate;
});