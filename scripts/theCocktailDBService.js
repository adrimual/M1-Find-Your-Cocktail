'use strict';
const inputValue = document.querySelector("#search-bar").value;
const searchBtn = document.querySelector(".search-btn");
const getCocktailByName = (cocktails) => {
    console.log(cocktails);
    const section = document.querySelector(".cocktail-by-name");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktails}`)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((cocktail) => {
            console.log(cocktail);
            const article = document.createElement("article");
            for (let i = 0; i < cocktails.length; i++) {
                if (inputValue == cocktails.strDrink) {
                    article.innerHTML = `
                        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}"/>
                        <h3>${cocktail.strDrink}</h3>
                        `;
                    section.appendChild(article);
                }
            }
        })
        .catch((err) => {})
}

searchBtn.addEventListener("click", () => getCocktailByName(inputValue))