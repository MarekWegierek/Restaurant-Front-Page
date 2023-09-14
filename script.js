const ingredientSelector = document.querySelectorAll(".ingredient-selector")
const cardsOfDishes = document.querySelector(".dishes")
import dishList from "./dishList.js"

let forbiddenIngredients = []
let isVegan = false

/*Ingredients filter */

ingredientSelector.forEach((button) => {
  button.addEventListener("click", () => {
    button.children[0].classList.toggle("invisible")
    button.children[1].classList.toggle("invisible")

    if (button.id !== "vegan") {
      if (!forbiddenIngredients.includes(button.id)) {
        forbiddenIngredients.push(button.id)
      } else {
        forbiddenIngredients = forbiddenIngredients.filter(
          (item) => item !== button.id
        )
      }
      console.log(forbiddenIngredients)
    } else {
      isVegan = !isVegan
      console.log(isVegan)
    }
  })
})
/*End of Ingredients filter */

/*Creating cards with dishes */

let menuList = dishList.map((card) => {
  let { img, title, ingredientsList } = card
  return `<div class="dish-card">
            <img class="dish-card-img" src=${img} />
            <h4>${title}</h4>
            <div class="dish-card-serving-time">
              <img class="dish-card-icon" src="./Icons/sunrise.svg" />
              <img class="dish-card-icon" src="./Icons/day.svg" />
              <img class="dish-card-icon" src="./Icons/evening.svg" />
            </div>
            <div class="dish-card-ingredients">
              <img class="dish-card-icon" src="./Icons/nuts.svg" />
              <img class="dish-card-icon" src="./Icons/gluten.svg" />
              <img class="dish-card-icon" src="./Icons/sugar.svg" />
              <img class="dish-card-icon" src="./Icons/vegan.svg" />
            </div>
            <div class="dish-card-ingredient">
              <h5>Ingredients:</h5>
              <p class="dish-card-ingredients-list">
                ${ingredientsList.join(", ")}
              </p>
            </div>
          </div>`
})

cardsOfDishes.innerHTML = menuList.join("")
