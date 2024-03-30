const loginForm = document.querySelector("form.login-form");
const inputs = document.querySelectorAll("form.login-form input");

loginForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const form = ev.target;
  const { elements } = form;
  const inputsArr = Array.from(inputs);
  if (!inputsArr.every((input) => input.value)) {
    window.alert("Please fill in all fields before submitting the form.");
  }
});

// if (login === "" || password === "") {
//  return console.log("Please fill in all fields before submitting the form.");
