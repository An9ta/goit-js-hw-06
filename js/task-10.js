function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const calc = document.getElementById("controls").querySelector("input");
let size = 30;

create.addEventListener("click", () => {
  for (let i = 0; i < calc.valueAsNumber; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    boxes.append(div);
    size += 10;
  }
});
destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
  size = 30;
});
