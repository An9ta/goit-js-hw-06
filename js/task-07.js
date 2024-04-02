const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});

const sliderControl = document.querySelector("#font-size-control");
sliderControl.addEventListener("input", fontSizeControl);
