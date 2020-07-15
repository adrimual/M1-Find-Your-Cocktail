'use strict';

var searchBtn = document.querySelector(".search-btn");

const getCocktailByName = () => {
    var cocktails = document.querySelector("#search-bar").value;
    console.log(cocktails);
    var section = document.querySelector("#cocktail-by-name");

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktails}`)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((cocktail) => {
            var article = document.createElement("article");
            for (let i = 0; i < cocktail.drinks.length; i++) {
                console.log(cocktail.drinks[i].strDrinkThumb);
                // if (cocktails == cocktails.strDrink) {
                section.innerHTML = section.innerHTML + `
                        <img src="${cocktail.drinks[i].strDrinkThumb}" alt="${cocktail.drinks[i].strDrink}"/>
                        <h3>${cocktail.drinks[i].strDrink}</h3>
                        `;
                // }
            }
        })
        .catch((err) => {})
}
// const getAllCocktails = (cocktails) => {
//     console.log("cocktails");
//     const section = document.querySelector(".cocktail-by-name");
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktails}`)
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         })
//         .then((cocktail) => {
//             console.log(cocktail);
//             const article = document.createElement("article");
//             for (let i = 0; i < cocktails.length; i++) {
//                 if (inputValue == cocktails.strDrink) {
//                     article.innerHTML = `
//                         <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}"/>
//                         <h3>${cocktail.strDrink}</h3>
//                         `;
//                     section.appendChild(article);
//                 }
//             }
//         })
//         .catch((err) => {})
// }

searchBtn.addEventListener("click", () => getCocktailByName())