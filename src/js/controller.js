/*const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const showRecipe = async function () {
  try {

    const resp = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );

    const data = await resp.json();

  
    const { recipe: recipeRaw } = data.data;

   
    const recipe = {
      id: recipeRaw.id,
      title: recipeRaw.title,
      publisher: recipeRaw.publisher,
      sourceUrl: recipeRaw.source_url,
      image: recipeRaw.image_url,
      servings: recipeRaw.servings,
      cookTime: recipeRaw.cooking_time,
      ingredients: recipeRaw.ingredients,
    };


    const markup = `
      <figure class="recipe__fig">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <span class="recipe__info-data recipe__info-data--minutes">
            ${recipe.cookTime}
          </span>
          <span class="recipe__info-text">minutes</span>
        </div>

        <div class="recipe__info">
          <span class="recipe__info-data recipe__info-data--people">
            ${recipe.servings}
          </span>
          <span class="recipe__info-text">servings</span>
        </div>

        <button class="btn--round">
          Bookmark
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${recipe.ingredients
            .map(
              ing => `
                <li class="recipe__ingredient">
                  <span>${ing.quantity ?? ''}</span>
                  <span>${ing.unit ?? ''}</span>
                  <span>${ing.description}</span>
                </li>
              `
            )
            .join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${recipe.publisher}</span>.
          Please check out directions at their website.
        </p>

        <a
          class="btn--small recipe__btn"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
        </a>
      </div>
    `;


    document.querySelector('.recipe').innerHTML = markup;

  
    console.log(recipe);

  } catch (err) {
    console.error(err);
  }
};


showRecipe();*/



import icons from '../img/icons.svg';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};


const renderSpinner = function (parentEl) {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;

  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const showRecipe = async function () {
  try {
    
    renderSpinner(recipeContainer);

    const resp = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );

    const data = await resp.json();

    const { recipe } = data.data;

    const recipeFormatted = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    const markup = `
      <figure class="recipe__fig">
        <img src="${recipeFormatted.image}" alt="${recipeFormatted.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipeFormatted.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span>${recipeFormatted.cookTime}</span>
          <span>minutes</span>
        </div>

        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span>${recipeFormatted.servings}</span>
          <span>servings</span>
        </div>
      </div>

      <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
          ${recipeFormatted.ingredients
            .map(
              ing => `
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="${icons}#icon-check"></use>
                  </svg>
                  <span>${ing.quantity ?? ''}</span>
                  <span>${ing.unit ?? ''}</span>
                  <span>${ing.description}</span>
                </li>
              `
            )
            .join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <p>
          By ${recipeFormatted.publisher}
        </p>
        <a href="${recipeFormatted.sourceUrl}" target="_blank">
          Directions
        </a>
      </div>
    `;

  
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);

  } catch (err) {
    console.error(err);
  }
};

showRecipe();