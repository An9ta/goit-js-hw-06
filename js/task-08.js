function checkForm(ev) {
  const formData = {
    email: null,
    password: null,
  };

  const {
    elements: { email, password },
  } = ev.currentTarget;

  ev.preventDefault();

  if (email.value === "" || password.value === "") {
    alert("Please fill in all fields before submitting the form.");
  } else {
    formData.email = email.value;
    formData.password = password.value;
    console.log(formData);
    ev.currentTarget.reset();
  }
}

const form = document.querySelector(".login-form");
form.addEventListener("submit", checkForm);

//const loginForm = document.querySelector("form.login-form");
//const inputs = document.querySelectorAll("form.login-form input");

//loginForm.addEventListener("submit", (ev) => {
//ev.preventDefault();
//const form = ev.target;
//const { elements } = form;
//const inputsArr = Array.from(inputs);
//if (!inputsArr.every((input) => input.value)) {
//window.alert("Please fill in all fields before submitting the form.");
//}
//});
