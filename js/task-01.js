const NumberCategories = document
  .querySelector("#categories")
  .querySelectorAll("ul").length;
const categoriesList = document
  .querySelector("#categories")
  .querySelectorAll(".item");
console.log(`Number of categories: ${NumberCategories}`);
categoriesList.forEach((elem) => {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  console.log(`Elements: ${elem.querySelector("ul").querySelectorAll("li").length}`);
});