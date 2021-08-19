    function createCardIng(ings) {
        const card = document.createElement('div');
        card.className = 'ing-card';

        const name = document.createElement('h6');
        const nameText = document.createTextNode(ings['ingrediente']);
        name.appendChild(nameText)

        const img = document.createElement('img');
        img.src = ings['imagen'];
        img.alt = ings['ingrediente'];
        img.width = 150
        img.height = 75

        card.appendChild(name);
        card.appendChild(img);

        return card;
    };
        
        async function getRandomMeal() {
            const url=window.location.href;
            const id=url?.split("id=")?.[1];
            let data

            if (id) {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                data = await response.json()
                data = data.meals[0];
            }
            else {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
                data = await response.json()
                data = data.meals[0];
            }

            const mealName = data.strMeal
            const mealInst = data.strInstructions
            const mealImg = data.strMealThumb
            
            document.getElementById('mealName').textContent = mealName
            document.getElementById('mealInst').textContent = mealInst
            document.getElementById('mealImg').src = mealImg

            let a=[]
            
            if(data.strIngredient1!=null && data.strIngredient1!=""){
                a.push({'ingrediente' : data.strIngredient1,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient1+'.png'})
            }
            if(data.strIngredient2!=null && data.strIngredient2!=""){
                a.push({'ingrediente' : data.strIngredient2,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient2+'.png'})
            }
            if(data.strIngredient3!=null && data.strIngredient3!=""){
                a.push({'ingrediente' : data.strIngredient3,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient3+'.png'})
            }
            if(data.strIngredient4!=null && data.strIngredient4!=""){
                a.push({'ingrediente' : data.strIngredient4,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient4+'.png'})
            }
            if(data.strIngredient5!=null && data.strIngredient5!=""){
                a.push({'ingrediente' : data.strIngredient5,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient5+'.png'})
            }
            if(data.strIngredient6!=null && data.strIngredient6!=""){
                a.push({'ingrediente' : data.strIngredient6,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient6+'.png'})
            }
            if(data.strIngredient7!=null && data.strIngredient7!=""){
                a.push({'ingrediente' : data.strIngredient7,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient7+'.png'})
            }
            if(data.strIngredient8!=null && data.strIngredient8!=""){
                a.push({'ingrediente' : data.strIngredient8,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient8+'.png'})
            }
            if(data.strIngredient9!=null && data.strIngredient9!=""){
                a.push({'ingrediente' : data.strIngredient9,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient9+'.png'})
            }
            if(data.strIngredient10!=null && data.strIngredient10!=""){
                a.push({'ingrediente' : data.strIngredient10,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient10+'.png'})
            }
            if(data.strIngredient11!=null && data.strIngredient11!=""){
                a.push({'ingrediente' : data.strIngredient11,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient11+'.png'})
            }
            if(data.strIngredient12!=null && data.strIngredient12!=""){
                a.push({'ingrediente' : data.strIngredient12,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient12+'.png'})
            }
            if(data.strIngredient13!=null && data.strIngredient13!=""){
                a.push({'ingrediente' : data.strIngredient13,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient13+'.png'})
            }
            if(data.strIngredient14!=null && data.strIngredient14!=""){
                a.push({'ingrediente' : data.strIngredient14,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient14+'.png'})
            }
            if(data.strIngredient15!=null && data.strIngredient15!=""){
                a.push({'ingrediente' : data.strIngredient15,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient15+'.png'})
            }
            if(data.strIngredient16!=null && data.strIngredient16!=""){
                a.push({'ingrediente' : data.strIngredient16,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient16+'.png'})
            }
            if(data.strIngredient17!=null && data.strIngredient17!=""){
                a.push({'ingrediente' : data.strIngredient17,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient17+'.png'})
            }
            if(data.strIngredient18!=null && data.strIngredient18!=""){
                a.push({'ingrediente' : data.strIngredient18,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient18+'.png'})
            }
            if(data.strIngredient19!=null && data.strIngredient19!=""){
                a.push({'ingrediente' : datas.strIngredient19,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient19+'.png'})
            }
            if(data.strIngredient20!=null && data.strIngredient20!=""){
                a.push({'ingrediente' : data.strIngredient20,'imagen':'https://www.themealdb.com/images/ingredients/'+data.strIngredient20+'.png'})
            }

            console.log(a)
            const card = document.querySelector('#searched');

            for (let index = 0; index < a.length-1; index++) {
                let ing = a[index];
                card.appendChild(createCardIng(ing))
            }
        };
    
        getRandomMeal();