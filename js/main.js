
async function fetchMealData() {
    const query = document.getElementById("inp")
    try {
        let container = document.getElementById("resultCont");
        container.innerHTML = "<p>Finding your recipe...</p>";

        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + query.value);
        let data = await response.json();

        container.innerHTML = "";


        if (!data.meals || data.meals.length === 0) {
            let template = `<div class = "container">
                                <p> NO RESULT FOUND</p>
                            </div>`
            container.insertAdjacentHTML('beforeend', template);
        } else {
            data.meals.forEach(function (recipes) {
                console.log(recipes);
                let template = `<div class="container">
                                <div class="header">
                                    <div class="imgCont">
                                        <img src="${recipes.strMealThumb}">
                                    </div>

                                    <div class= "mealInfo">
                                        <p><b>${recipes.strMeal}</b></p>
                                        <p>Area: ${recipes.strArea}</p>
                                        <p>Category: ${recipes.strCategory}</p>
                                        <a href = ${recipes.strYoutube} target="_blank">Watch tutorial on Youtube</a>
                                    </div>
                                </div>

                                <div class = contents>
                                    <div class = "ingredients">`;

                for (let i = 0; i <= 20; i++) {
                    const ingredients = recipes[`strIngredient${i}`];
                    const measurement = recipes[`strMeasure${i}`];

                    if (ingredients && measurement) {
                        template += `<p>${measurement} ${ingredients}</p>`
                    }
                }

                template += `</div>
                                    <div class = "direction">
                                        ${recipes.strInstructions}
                                    </div>
                            </div>`

                container.insertAdjacentHTML('beforeend', template)

            });
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}


async function generateRandom() {
    try {
        let container = document.getElementById("resultCont");
        container.innerHTML = "<p>Finding a random recipe...</p>";

        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        let data = await response.json();

        container.innerHTML = "";

        data.meals.forEach(function (recipes) {
            console.log(recipes);
            let template = `<div class="container">

                            <div class="header">
                                <div class="imgCont">
                                    <img src="${recipes.strMealThumb}">
                                </div>
                                <div class= "mealInfo">
                                    <p><b>${recipes.strMeal}</b></p>
                                    <p>Area: ${recipes.strArea}</p>
                                    <p>Category: ${recipes.strCategory}</p>
                                    <a href = ${recipes.strYoutube} target="_blank">Watch tutorial on Youtube</a>
                                </div>
                            </div>

                            <div class = contents>
                                <div class = "ingredients">`;

            for (let i = 0; i <= 20; i++) {
                const ingredients = recipes[`strIngredient${i}`];
                const measurement = recipes[`strMeasure${i}`];

                if (ingredients && measurement) {
                    template += `<p>${measurement} ${ingredients}</p>`
                }
            }

            template += `</div>
                                <div class = "direction">
                                    ${recipes.strInstructions}
                                </div>

                        </div>`

            container.insertAdjacentHTML('beforeend', template)

        });

    } catch (error) {
        console.log(error);
    }
};