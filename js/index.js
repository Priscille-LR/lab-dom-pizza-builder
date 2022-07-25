// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
const btnPepperoni = document.querySelector('.btn.btn-pepperoni')
btnPepperoni.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const btnMushrooms = document.querySelector('.btn.btn-mushrooms')
btnMushrooms.addEventListener('click', () => {
    console.log('button mushrooms clicked')
    state.mushrooms = !state.mushrooms;
    renderEverything()
   
  })

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
const btnGreenPeppers = document.querySelector('.btn.btn-green-peppers')
btnGreenPeppers.addEventListener('click', () => {
    console.log('button pepper clicked')
    state.greenPeppers = !state.greenPeppers;
    renderEverything()
  })

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const btnWhiteSauce = document.querySelector('.btn.btn-sauce')
btnWhiteSauce.addEventListener('click', () => {
  console.log('button white sauce clicked')
  state.whiteSauce = !state.whiteSauce;
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
const btnGlutenFreeCrust = document.querySelector('.btn.btn-crust')
btnGlutenFreeCrust.addEventListener('click', () => {
  console.log('button crust clicked')
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
})

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  if (!state.whiteSauce) {
    sauce.classList.remove('sauce-white')
  } else {
    sauce.classList.add('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (!state.glutenFreeCrust) {
    crust.classList.remove('crust-gluten-free')
  } else {
    crust.classList.add('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperoni) {
    btnPepperoni.classList.add('active')
  } else {
    btnPepperoni.classList.remove('active')
  }

  if(state.mushrooms) {
    btnMushrooms.classList.add('active')
  } else {
    btnMushrooms.classList.remove('active')
  }

  if(state.greenPeppers) {
    btnGreenPeppers.classList.add('active')
  } else {
    btnGreenPeppers.classList.remove('active')
  }

  if(state.whiteSauce) {
    btnWhiteSauce.classList.add('active')
  } else {
    btnWhiteSauce.classList.remove('active')
  }

  if(state.glutenFreeCrust) {
    btnGlutenFreeCrust.classList.add('active')
  } else {
    btnGlutenFreeCrust.classList.remove('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pizzaPrice = basePrice
  let ingredientList = document.querySelector('.price ul')
  ingredientList.innerHTML = ""

  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      pizzaPrice += ingredients[ingredient].price
      ingredientList.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
    }
  }

  const totalPrice = document.querySelector('.price strong')
  totalPrice.innerHTML = `$${pizzaPrice}`
}

renderEverything();
