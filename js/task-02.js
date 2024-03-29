const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul");
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList.add("item");
  fragment.append(listElement);
});

ingredientsList.append(fragment);
