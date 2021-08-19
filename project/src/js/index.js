import '../css/styles.css';
import 'regenerator-runtime/runtime.js';

/* Hide and show figures */
function hideChef(){
  let img=document.querySelector("#Chef")
  img.style.display="none"
}

function hideNotFound(){
  let NotFound=document.querySelector("#Not-Found")
  NotFound.style.display="none"
}

function showNotFound(){
  let NotFound=document.querySelector("#Not-Found")
  NotFound.style.display="block"
}

/* Before run tests and eventhandlers */
function RunSearch(){
  if(searchInput.value!=""){
    getSearchedMeal()
  }
}

function EnterSearch(e){
  if(e.key == "Enter"){
    RunSearch()
  }
}

/* Create container of recipes */
function createCard(data) {
  const card = document.createElement('div');
  card.className = 'meal-card';

  const name = document.createElement('h2');
  const nameText = document.createTextNode(data.strMeal);
  name.appendChild(nameText)

  const instructions = document.createElement('h6');
  const instTags = document.createTextNode(data.strTags);
  instructions.appendChild(instTags)

  const img = document.createElement('img');
  img.src = data.strMealThumb;
  img.alt = data.strMeal;
  img.width = 150
  img.height = 75

  card.appendChild(name);
  card.appendChild(img);
  card.appendChild(instructions);

  card.addEventListener("click",()=>window.location=`/random.html?id=${data.idMeal}`);
  return card;
}

/* Search code */
var searchButton = document.getElementById("search-button")
const searchInput = document.getElementById('search-input-box');

searchButton.addEventListener('click', RunSearch);
window.addEventListener('keydown', EnterSearch);

async function getSearchedMeal() {

  const card = document.querySelector('#searched');
  const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const search = searchInput.value;

  hideChef()
  hideNotFound()

  if(card.childElementCount>0){
    card.innerHTML="";
  };

  const formattedSearch = API_URL+String(search);
  const response = await fetch(formattedSearch);
  let data = await response.json();
  let  meal

  if (data.meals != null){
    const leng = data.meals.length;
    for (let index = 0; index < leng; index++) {
      meal = data.meals[index];
      card.appendChild(createCard(meal))} }
    else {
      showNotFound()
  };
};
