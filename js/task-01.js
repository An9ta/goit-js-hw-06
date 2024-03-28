function listSum(itemlist) {
  console.log(`Number of categories: ${listSum.length}`);

  itemlist.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
  });
}

// Napisz skrypt, który:
// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu(tag < h2 >) i liczbę elementów w danej kategorii (wszystkich w jej obrębie < li >).Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).
