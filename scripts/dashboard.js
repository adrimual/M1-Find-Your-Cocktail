const displayResult = (cocktailName) => {
    var section = document.querySelector("#cocktail-by-name");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
        .then((response) => {
            //  console.log(response);
            return response.json();
        })
        .then((cocktail) => {
            if (cocktail.drinks) {
                section.innerHTML =
                    section.innerHTML + `<div class="image-container">
          <a class="linkUrl" href="dashboard1.html?cocktailName=${cocktail.drinks[0].strDrink}">
          <img src="${cocktail.drinks[0].strDrinkThumb}" alt="${cocktail.drinks[0].strDrink}"/>
          <h3>${cocktail.drinks[0].strDrink}</h3></a></div>`
            }
        })
        .catch((err) => console.log(err))
}
const urlParams = new URLSearchParams(window.location.search);
const cocktailName = urlParams.get('cocktailName');

window.addEventListener('load', () => displayResult(cocktailName))