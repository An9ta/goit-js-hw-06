const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
function createList(ingredientsList) {
  const listLi = [];

  ingredientsList.array.forEach((element) => {
    const item = document.createElement("li");
    item.textContent = element;
    item.className = "item";
    listLi.push(item);
  });
  return listLi;
}

// Napisz skrypt, który dla każdego elementu tablicy ingredients:
// Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
// Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.