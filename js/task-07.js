const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

const initialSize = (text.style.fontSize = fontSizeControl.value + "px");

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});
