var loading = search=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

var displayMeals = meals =>{

    var Mealscontainer = document.getElementById('meals-container')
        Mealscontainer.innerHTML = ``;
    for( meal of meals){
        // console.log(meal)
        var MealsDiv = document.createElement('div')
        MealsDiv.classList.add('col')
        MealsDiv.innerHTML = `
       <div class="card" onclick ="LoadingDetails(${meal.idMeal})">
       <img src=" ${meal.strMealThumb} " class="card-img-top" alt="...">
       <div class="card-body">
       <h5 class="card-title"> ${meal.strMeal}</h5>
       <p class="card-text">${meal.strInstructions.slice(0,300)} </p>
       </div>
       </div>
        `
       Mealscontainer.appendChild(MealsDiv)
    }
}
// for search items
var searchitem = () =>{
    var searchfood = document.getElementById('search-field')
    const searchText = searchfood.value;
    loading(searchText)
    searchfood.value ='';
}
// for display and chooice
const LoadingDetails = (idMeal) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => MealsDetails(data.meals[0]))
    
}

const MealsDetails = meal =>{
    const MealsDetailsContainer = document.getElementById('display-details')
    MealsDetailsContainer.innerHTML =``;
    const MealsDetailsDiv = document.createElement('div')
    MealsDetailsDiv.classList.add('card')
    MealsDetailsDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
    `
MealsDetailsContainer.appendChild(MealsDetailsDiv)
}
// MealsDetails()