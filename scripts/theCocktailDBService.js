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
                            <a href="dashboard1.html?cocktailName=${cocktail.drinks[i].strDrink}">
                    <img src="${cocktail.drinks[i].strDrinkThumb}" alt="${cocktail.drinks[i].strDrink}"/>
                    <h3>${cocktail.drinks[i].strDrink}</h3></a></div>`
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

searchBtn.addEventListener("click", () => getCocktailByName())