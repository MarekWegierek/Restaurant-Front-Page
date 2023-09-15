const ingredientSelector = document.querySelectorAll(".ingredient-selector")
const cardsOfDishes = document.querySelector(".dishes")
import dishList from "./dishList.js"

let havePeanuts = true
let haveGluten = true
let haveSugar = true
let isVegan = true

/*Ingredients filter */

ingredientSelector.forEach((button) => {
  button.addEventListener("click", () => {
    button.children[0].classList.toggle("invisible")
    button.children[1].classList.toggle("invisible")

    switch (button.id) {
      case "peanuts":
        havePeanuts = !havePeanuts
        break
      case "gluten":
        haveGluten = !haveGluten
        break
      case "sugar":
        haveSugar = !haveSugar
        break
      case "vegan":
        isVegan = !isVegan
        break
    }
    let menuList = dishList.map((card) => {
      let { img, title, ingredientsList } = card

      if (
        card.isVegan == isVegan &&
        card.havePeanuts == havePeanuts &&
        card.haveGluten == haveGluten &&
        card.haveSugar == haveSugar
      ) {
        return `
        <div class="dish-card">
            <div class="dish-card-header">
              <img
                class="dish-card-header-img"
                src="${img}"
              />
              <h4>${title}</h4>
            </div>
            <div class="dish-card-icons">
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
            </div>
            <div class="dish-card-ingredient">
              <h5>Ingredients:</h5>
              <p class="dish-card-ingredients-list">
                ${ingredientsList.join(", ")}
              </p>
            </div>
          </div>
        `
      }
    })
    cardsOfDishes.innerHTML = menuList.join("")
  })
})
/*End of Ingredients filter */

/*Creating cards with dishes */
let menuList = dishList.map((card) => {
  let { img, title, ingredientsList } = card

  return `
          <div class="dish-card">
            <div class="dish-card-header">
              <img
                class="dish-card-header-img"
                src="${img}"
              />
              <h4>${title}</h4>
            </div>
            <div class="dish-card-icons">
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
            </div>
            <div class="dish-card-ingredient">
              <h5>Ingredients:</h5>
              <p class="dish-card-ingredients-list">
                ${ingredientsList.join(", ")}
              </p>
            </div>
          </div>
        `
})
cardsOfDishes.innerHTML = menuList.join("")
