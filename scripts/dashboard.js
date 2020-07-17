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
                var ingredients = [];
                for (let i = 0; i < 15; i++) {
                    let currentIngredient = cocktail.drinks[0][`strIngredient${i}`];
                    if (currentIngredient) {
                        ingredients.push(currentIngredient);
                    }
                }
                console.log('ingredients :>> ', ingredients);
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