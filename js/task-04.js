let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

function updateCounter(action) {
  if (action === "increment") {
    counterValue++;
  } else if (action === "decrement") {
    counterValue--;
  }

  valueSpan.innerText = counterValue;
}

decrementBtn.addEventListener("click", () => {
  updateCounter("decrement");
});

incrementBtn.addEventListener("click", () => {
  updateCounter("increment");
});
