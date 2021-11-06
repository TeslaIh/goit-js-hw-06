const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ListIngredients = document.querySelector("#ingredients");
// const newArr = [];
const ItemsIngredients = ingredients.map((element, i) => {
  const elem = document.createElement("li");
  const sd = elem.classList.add("item");
  elem.textContent = element;
  return elem
  // newArr.push(El);
});
ListIngredients.append(...ItemsIngredients);