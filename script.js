const ingredientSelector = document.querySelectorAll('.ingredient-selector')
const cardsOfDishes = document.querySelector('.dishes')
import dishList from './dishList.js'

let havePeanuts = true
let haveGluten = true
let haveSugar = true
let isVegan = true

/*Ingredients filter */

ingredientSelector.forEach((button) => {
  button.addEventListener('click', () => {
    button.children[0].classList.toggle('invisible')
    button.children[1].classList.toggle('invisible')

    switch (button.id) {
      case 'peanuts':
        havePeanuts = !havePeanuts
        break
      case 'gluten':
        haveGluten = !haveGluten
        break
      case 'sugar':
        haveSugar = !haveSugar
        break
      case 'vegan':
        isVegan = !isVegan
        break
    }
    let menuList = dishList.map((card) => {
      let { img, title, ingredientsList } = card

      let [peanuts, peanutsIconElem] = [
        '',
        `<img class="dish-card-icon" title="With Peanuts" src="./Icons/nuts.svg" />`,
      ]
      let [gluten, glutenIconElem] = [
        '',
        `<img class="dish-card-icon" title="With Gluten" src="./Icons/gluten.svg" />`,
      ]
      let [sugar, sugarIconElem] = [
        '',
        `<img class="dish-card-icon" title="With Sugar" src="./Icons/sugar.svg" />`,
      ]
      let [vegan, veganIconElem] = [
        '',
        '<img class="dish-card-icon green" title="Vegan" src="./Icons/vegan.svg" />',
      ]

      function testHavePeanuts(value, elem) {
        if (value) {
          peanuts = elem
        } else {
          peanuts = ''
        }
      }
      function testHaveGluten(value, elem) {
        if (value) {
          gluten = elem
        } else {
          gluten = ''
        }
      }
      function testHaveSugar(value, elem) {
        if (value) {
          sugar = elem
        } else {
          sugar = ''
        }
      }
      function testIsVegan(value, elem) {
        if (value) {
          vegan = elem
        } else {
          vegan =
            '<img class="dish-card-icon" title="Vegetarian" src="./Icons/no-vegan.svg" />'
        }
      }
      testIsVegan(card.isVegan, veganIconElem)
      testHaveSugar(card.haveSugar, sugarIconElem)
      testHaveGluten(card.haveGluten, glutenIconElem)
      testHavePeanuts(card.havePeanuts, peanutsIconElem)
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
                ${peanuts}
                ${gluten}
                ${sugar}
                ${vegan}
              </div>
            </div>
            <div class="dish-card-ingredient">
              <h5>Ingredients:</h5>
              <p class="dish-card-ingredients-list">
                ${ingredientsList.join(', ')}
              </p>
            </div>
          </div>
        `
      }
    })
    cardsOfDishes.innerHTML = menuList.join('')
  })
})
/*End of Ingredients filter */

/*Creating cards with dishes */
let menuList = dishList.map((card) => {
  let { img, title, ingredientsList } = card

  let [peanuts, peanutsIconElem] = [
    '',
    `<img class="dish-card-icon" title="With Peanuts" src="./Icons/nuts.svg" />`,
  ]
  let [gluten, glutenIconElem] = [
    '',
    `<img class="dish-card-icon" title="With Gluten" src="./Icons/gluten.svg" />`,
  ]
  let [sugar, sugarIconElem] = [
    '',
    `<img class="dish-card-icon" title="With Sugar" src="./Icons/sugar.svg" />`,
  ]
  let [vegan, veganIconElem] = [
    '',
    '<img class="dish-card-icon" title="Vegan" src="./Icons/vegan.svg" />',
  ]

  function testHavePeanuts(value, elem) {
    if (value) {
      peanuts = elem
    } else {
      peanuts = ''
    }
  }
  function testHaveGluten(value, elem) {
    if (value) {
      gluten = elem
    } else {
      gluten = ''
    }
  }
  function testHaveSugar(value, elem) {
    if (value) {
      sugar = elem
    } else {
      sugar = ''
    }
  }
  function testIsVegan(value, elem) {
    if (value) {
      vegan = elem
    } else {
      vegan =
        '<img class="dish-card-icon" title="Vegetarian" src="./Icons/no-vegan.svg" />'
    }
  }
  testIsVegan(card.isVegan, veganIconElem)
  testHaveSugar(card.haveSugar, sugarIconElem)
  testHaveGluten(card.haveGluten, glutenIconElem)
  testHavePeanuts(card.havePeanuts, peanutsIconElem)

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
                ${peanuts}
                ${gluten}
                ${sugar}
                ${vegan}
              </div>
            </div>
            <div class="dish-card-ingredient">
              <h5>Ingredients:</h5>
              <p class="dish-card-ingredients-list">
                ${ingredientsList.join(', ')}
              </p>
            </div>
          </div>
        `
})
cardsOfDishes.innerHTML = menuList.join('')
