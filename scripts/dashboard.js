const cocktailElement = document.querySelector(".cocktail");
const ingredientsElement = document.querySelector(".ingredients ul");
const instructionsElement = document.querySelector(".instructions");

const displayResult = (cocktailName) => {
    var section = document.querySelector("#cocktail-by-name");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
        .then((response) => {
            return response.json();
        })
        .then((cocktail) => {
            if (cocktail.drinks) {
                var ingredients = [cocktail.drinks[0].strIngredient1, cocktail.drinks[0].strIngredient2, cocktail.drinks[0].strIngredient3,
                    cocktail.drinks[0].strIngredient4, cocktail.drinks[0].strIngredient5, cocktail.drinks[0].strIngredient6,
                    cocktail.drinks[0].strIngredient7, cocktail.drinks[0].strIngredient8, cocktail.drinks[0].strIngredient9,
                    cocktail.drinks[0].strIngredient10, cocktail.drinks[0].strIngredient11, cocktail.drinks[0].strIngredient12,
                    cocktail.drinks[0].strIngredient13, cocktail.drinks[0].strIngredient14, cocktail.drinks[0].strIngredient15
                ];
                console.log(ingredients);
                cocktailElement.innerHTML = `
                                <h3>${cocktail.drinks[0].strDrink}</h3>
                                <img src="${cocktail.drinks[0].strDrinkThumb}" alt="${cocktail.drinks[0].strDrink}"/>`
                for (var i = 0; i < ingredients.length; i++) {
                    if (ingredients[i]) {
                        console.log(ingredients[i]);
                        ingredientsElement.innerHTML = ingredientsElement.innerHTML + `<li> ${ingredients[i]}</li>`;
                        console.log(ingredientsElement.innerHTML);
                    }
                }
                instructionsElement.innerHTML = cocktail.drinks[0].strInstructions;
            }
        })
        .catch((err) => console.log(err))
}
const urlParams = new URLSearchParams(window.location.search);
const cocktailName = urlParams.get('cocktailName');

window.addEventListener('load', () => displayResult(cocktailName))