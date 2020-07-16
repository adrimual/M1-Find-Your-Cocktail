'use strict';

var searchBtn = document.querySelector(".search-btn");

const getCocktailByName = () => {
    var cocktails = document.querySelector("#search-bar");
    console.log(cocktails);
    var section = document.querySelector("#cocktail-by-name");
    section.innerHTML = "";
    if (cocktails.value != "") {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktails.value}`)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((cocktail) => {
                if (cocktail.drinks) {
                    for (let i = 0; i < cocktail.drinks.length; i++) {
                        console.log(cocktail.drinks[i].strDrink);
                        if (cocktail.drinks[i].strDrink.toLowerCase().includes(cocktails.value.toLowerCase())) {
                            console.log(cocktail.drinks[i].strDrinkThumb);
                            section.innerHTML = section.innerHTML + `<div class="image-container">
                    <img src="${cocktail.drinks[i].strDrinkThumb}" alt="${cocktail.drinks[i].strDrink}"/>
                    <h3>${cocktail.drinks[i].strDrink}</h3></div>`
                        }
                    }
                    cocktails.value = "";
                } else {
                    const errorP = document.createElement("p");
                    errorP.innerHTML = "Not results found";
                    section.appendChild(errorP);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
const getCocktailsByIngredients = () => {
    var cocktails = document.querySelector("#search-bar").value;
    console.log(ingredient);
    var section = document.querySelector("#cocktail-by-ingredient");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktails}`)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((cocktail) => {

            for (let i = 0; i < cocktail.drinks.length; i++) {
                console.log(cocktail.drinks[i].strDrinkThumb);
                section.innerHTML = section.innerHTML + `<div class="image-container">
                <img src="${cocktail.drinks[i].strDrinkThumb}" alt="${cocktail.drinks[i].strDrink}"/>
                <h3>${cocktail.drinks[i].strDrink}</h3></div>`
            }
        })
        .catch((err) => {})
}
searchBtn.addEventListener("click", () => getCocktailByName())