
async function fetchMealData() {
  const query = document.getElementById("inp")
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + query.value);
    let data = await response.json();
    
    let container = document.getElementById("resultCont");
    container.innerHTML = "";

    data.meals.forEach(function(recipes){
        console.log(recipes);
        let template = `<div class="container">
                            <div class="header">
                                <p>${recipes.strMeal}</p>
                                <p>Area: ${recipes.strArea}</p>
                                <p>Category: ${recipes.strCategory}</p>
                            </div>

                            <div class = contents>
                                <div class = "ingredients">`;

                                    for(let i = 0; i <= 20; i++){
                                        const ingredients = recipes[`strIngredient${i}`];
                                        const measurement = recipes[`strMeasure${i}`];

                                        if(ingredients && measurement){
                                            template += `<p>${measurement} ${ingredients}</p>`
                                        }
                                    }
                                    
                                template += `</div>
                                <div class = "direction">
                                    ${recipes.strInstructions}
                                </div>

                                <div class="footer"></div>
                            </div>
                        </div>`

    container.insertAdjacentHTML('beforeend', template)

    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
  
}

async function generateRandom(){
    try{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        let data = await response.json();
        
        let container = document.getElementById("resultCont");
    container.innerHTML = "";

    data.meals.forEach(function(recipes){
        console.log(recipes);
        let template = `<div class="container">
                            <div class="header">
                                <p>${recipes.strMeal}</p>
                                <p>Area: ${recipes.strArea}</p>
                                <p>Category: ${recipes.strCategory}</p>
                            </div>

                            <div class = contents>
                                <div class = "ingredients">`;

                                    for(let i = 0; i <= 20; i++){
                                        const ingredients = recipes[`strIngredient${i}`];
                                        const measurement = recipes[`strMeasure${i}`];

                                        if(ingredients && measurement){
                                            template += `<p>${measurement} ${ingredients}</p>`
                                        }
                                    }
                                    
                                template += `</div>
                                <div class = "direction">
                                    ${recipes.strInstructions}
                                </div>

                                <div class="footer"></div>
                            </div>
                        </div>`

    container.insertAdjacentHTML('beforeend', template)

    });

    }catch (error){
        console.log(error);
    }
};