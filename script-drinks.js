////////////// Déclaration des variables
    
let modalProduct = document.getElementById("modalProduct");
let divImageProduct = document.getElementById("imageProduct");
let backBtn = document.getElementById("backBtn");
let divNameProduct = document.getElementById("nameProduct");
let divDescriptionProduct = document.getElementById("descriptionProduct");
let divCalorieProduct = document.getElementById("calorieProduct");
let drinksListe = document.getElementById("drinksListe");  
let drinks = [];
    
fetch("../mcdo.json")
    .then(function(response) {
        if(!response.ok){
            throw new Error ("Le fichier Json n'a pas pu être charger.");
        }
        return response.json();
    })

    .then(function(data) {
        drinks = data.drinks;

    // card drinks

        for(let i = 0; i<drinks.length; i++ ){

        // creation des elements
            let cardDrinks = document.createElement("div");
            let divImage = document.createElement("div");
            let divName = document.createElement("div");
            let divCart = document.createElement("div");
            let divBtnMore = document.createElement("div");
            let name = document.createElement("h2");
            let price = document.createElement("h3");

        // liens avec le Json
            divImage.innerHTML = `<img src="../assets/${drinks[i].image}">`;
            name.textContent = drinks[i].name;
            price.innerHTML = `<span>Ajouter au panier </span> ${drinks[i].price}€`;
            divBtnMore.innerHTML = `<button onclick="viewDetails('${drinks[i].name}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;

        // integration des elements
            divCart.appendChild(price);
            divCart.id = "divCart";

            divName.appendChild(name);
            divName.id = 'divName';

            cardDrinks.appendChild(divImage);
            cardDrinks.id = "card";

            cardDrinks.appendChild(divName);
            cardDrinks.appendChild(divCart);
            cardDrinks.appendChild(divBtnMore);

        // integration dans le HTML
            drinksListe.appendChild(cardDrinks);
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
    
function viewDetails(drinksView){
    if(modalProduct.classList.contains("hidden")){
        modalProduct.classList.remove("hidden");
        remove();

        let selectedDrinks = drinks.find( b=> b.name === drinksView);

        if (!selectedDrinks) {
            console.error("Drinks non trouvé avec l'ID :", drinksView);
            return;
        }

        // image
        let imageProduct = document.createElement("div");
        imageProduct.innerHTML = `<img src="../assets/${selectedDrinks.image}">`;
        divImageProduct.appendChild(imageProduct);

        // name
        let nameProduct = document.createElement("h2");
        nameProduct.textContent = selectedDrinks.name;
        divNameProduct.appendChild(nameProduct);

        // description
        let descriptionProduct = document.createElement("h3");
        descriptionProduct.textContent = selectedDrinks.description;
        divDescriptionProduct.appendChild(descriptionProduct);

        // calorie
        let calorieProduct = document.createElement("p");
        calorieProduct.textContent = selectedDrinks.calories + " calories";
        divCalorieProduct.appendChild(calorieProduct);
        

        backBtn.addEventListener('click', function(){
            if(!modalProduct.classList.contains("hidden")){
                modalProduct.classList.add("hidden");
                remove();
            };
        });
    };
};

    