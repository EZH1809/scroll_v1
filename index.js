const boxes = document.querySelectorAll('.box');
const checkBoxes = () => {
  const triger = (window.innerHeight / 5) * 4;
  for (const box of boxes) {
    const topOfBox = box.getBoundingClientRect().top;
    if (topOfBox < triger) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  }
};
window.addEventListener('scroll', checkBoxes);
