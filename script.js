const ingredientSelector = document.querySelectorAll(".ingredient-selector")

let forbiddenIngredients = []

ingredientSelector.forEach((button) => {
  button.addEventListener("click", () => {
    button.children[0].classList.toggle("invisible")
    button.children[1].classList.toggle("invisible")

    if (!forbiddenIngredients.includes(button.id)) {
      forbiddenIngredients.push(button.id)
    } else {
      forbiddenIngredients = forbiddenIngredients.filter(
        (item) => item !== button.id
      )
    }
    console.log(forbiddenIngredients)
  })
})

/* let ass = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(ass.filter((item) => item !== 5))
 */
