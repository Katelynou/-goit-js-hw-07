function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");
const input = document.querySelector("input");

function createBoxes(amount) {
  boxContainer.innerHTML = '';

  let boxesHTML = '';
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  }
  boxes.insertAdjacentHTML('beforeend', boxesHTML);
}

function destroyBoxes() {
  boxContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);
if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('You cannot do that');
  }
});

destroyButton.addEventListener('click', destroyBoxes);