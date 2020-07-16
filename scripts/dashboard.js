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
                section.innerHTML =
                    section.innerHTML + `
                    <div class="image-container">
                        <div class ="center">
                            <table style="width:100%">
                                <tbody>
                                    <tr>
                                        <td style="width:35%">
                                            <h3>${cocktail.drinks[0].strDrink}</h3>
                                        </td>
                                        <td style="width:60%">
                                            <h3>Ingredients</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="width:35%; vertical-align:top;">
                                            <img src="${cocktail.drinks[0].strDrinkThumb}" alt="${cocktail.drinks[0].strDrink}"/>
                                        </td>
                                        <td style="width:60%; vertical-align:top;">
                                            <table style="width:100%">
                                                <tbody>
                                                    <tr>`;
                for (var i = 0; i < ingredients.length; i++) {
                    if (ingredients[i]) {
                        console.log(ingredients[i]);
                        section.innerHTML = section.innerHTML + `<td>` + ingredients[i] + `</td>`;
                        console.log(section.innerHTML);
                    } else {
                        section.innerHTML =
                            section.innerHTML +
                            `</tr>
                                                </tbody>
                                            </table>
                                        </td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    `
                        break;
                    }
                }
            }
        })
        .catch((err) => console.log(err))
}
const urlParams = new URLSearchParams(window.location.search);
const cocktailName = urlParams.get('cocktailName');

window.addEventListener('load', () => displayResult(cocktailName))