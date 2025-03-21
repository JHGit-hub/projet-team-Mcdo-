////////////// Déclaration des variables
    
let modalProduct = document.getElementById("modalProduct");
let divImageProduct = document.getElementById("imageProduct");
let backBtn = document.getElementById("backBtn");
let divNameProduct = document.getElementById("nameProduct");
let divDescriptionProduct = document.getElementById("descriptionProduct");
let divCalorieProduct = document.getElementById("calorieProduct");
let happyMealListe = document.getElementById("happyMealListe");  
let happyMeal = [];
    
fetch("../mcdo.json")
    .then(function(response) {
        if(!response.ok){
            throw new Error ("Le fichier Json n'a pas pu être charger.");
        }
        return response.json();
    })

    .then(function(data) {
        happyMeal = data.happyMeal;

    // card happyMeal

        for(let i = 0; i<happyMeal.length; i++ ){

        // creation des elements
            let cardHappyMeal = document.createElement("div");
            let divImage = document.createElement("div");
            let divName = document.createElement("div");
            let divCart = document.createElement("div");
            let divBtnMore = document.createElement("div");
            let name = document.createElement("h2");
            let price = document.createElement("h3");

        // liens avec le Json
            divImage.innerHTML = `<img src="../assets/${happyMeal[i].image}">`;
            name.textContent = happyMeal[i].name;
            price.innerHTML = `<span>Ajouter au panier </span> ${happyMeal[i].price}€`;
            divBtnMore.innerHTML = `<button onclick="viewDetails('${happyMeal[i].name}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;

        // integration des elements
            divCart.appendChild(price);
            divCart.id = "divCart";

            divName.appendChild(name);
            divName.id = 'divName';

            cardHappyMeal.appendChild(divImage);
            cardHappyMeal.id = "card";

            cardHappyMeal.appendChild(divName);
            cardHappyMeal.appendChild(divCart);
            cardHappyMeal.appendChild(divBtnMore);

        // integration dans le HTML
            happyMealListe.appendChild(cardHappyMeal);
        }
    });
    

/////////////////// modal view
     
    
    // function remove() modal
    
function remove(){
    divCalorieProduct.innerHTML = "";
    divDescriptionProduct.innerHTML = "";
    divNameProduct.innerHTML = "";
    divImageProduct.innerHTML = "";
};
        
    // function viewDetails()
    
function viewDetails(happyMealView){
    if(modalProduct.classList.contains("hidden")){
        modalProduct.classList.remove("hidden");
        remove();

        let selectedHappyMeal = happyMeal.find( b=> b.name === happyMealView);

        if (!selectedHappyMeal) {
            console.error("HappyMeal non trouvé avec l'ID :", happyMealView);
            return;
        }

        // image
        let imageProduct = document.createElement("div");
        imageProduct.innerHTML = `<img src="../assets/${selectedHappyMeal.image}">`;
        divImageProduct.appendChild(imageProduct);

        // name
        let nameProduct = document.createElement("h2");
        nameProduct.textContent = selectedHappyMeal.name;
        divNameProduct.appendChild(nameProduct);

        // description
        let descriptionProduct = document.createElement("h3");
        descriptionProduct.textContent = selectedHappyMeal.description;
        divDescriptionProduct.appendChild(descriptionProduct);

        // calorie
        let calorieProduct = document.createElement("p");
        calorieProduct.textContent = selectedHappyMeal.calories + " calories";
        divCalorieProduct.appendChild(calorieProduct);
        

        backBtn.addEventListener('click', function(){
            if(!modalProduct.classList.contains("hidden")){
                modalProduct.classList.add("hidden");
                remove();
            };
        });
    };
};

    