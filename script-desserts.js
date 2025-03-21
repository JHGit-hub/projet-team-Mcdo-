////////////// Déclaration des variables
    
let modalProduct = document.getElementById("modalProduct");
let divImageProduct = document.getElementById("imageProduct");
let backBtn = document.getElementById("backBtn");
let divNameProduct = document.getElementById("nameProduct");
let divDescriptionProduct = document.getElementById("descriptionProduct");
let divCalorieProduct = document.getElementById("calorieProduct");
let dessertsListe = document.getElementById("dessertsListe");  
let desserts = [];
    
fetch("../mcdo.json")
    .then(function(response) {
        if(!response.ok){
            throw new Error ("Le fichier Json n'a pas pu être charger.");
        }
        return response.json();
    })

    .then(function(data) {
        desserts = data.desserts;

    // card desserts

        for(let i = 0; i<desserts.length; i++ ){

        // creation des elements
            let cardDesserts = document.createElement("div");
            let divImage = document.createElement("div");
            let divName = document.createElement("div");
            let divCart = document.createElement("div");
            let divBtnMore = document.createElement("div");
            let name = document.createElement("h2");
            let price = document.createElement("h3");

        // liens avec le Json
            divImage.innerHTML = `<img src="../assets/${desserts[i].image}">`;
            name.textContent = desserts[i].name;
            price.innerHTML = `<span>Ajouter au panier </span> ${desserts[i].price}€`;
            divBtnMore.innerHTML = `<button onclick="viewDetails('${desserts[i].name}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;

        // integration des elements
            divCart.appendChild(price);
            divCart.id = "divCart";

            divName.appendChild(name);
            divName.id = 'divName';

            cardDesserts.appendChild(divImage);
            cardDesserts.id = "card";

            cardDesserts.appendChild(divName);
            cardDesserts.appendChild(divCart);
            cardDesserts.appendChild(divBtnMore);

        // integration dans le HTML
            dessertsListe.appendChild(cardDesserts);
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
    
function viewDetails(dessertsView){
    if(modalProduct.classList.contains("hidden")){
        modalProduct.classList.remove("hidden");
        remove();

        let selectedDesserts = desserts.find( b=> b.name === dessertsView);

        if (!selectedDesserts) {
            console.error("Sides non trouvé avec l'ID :", sidesView);
            return;
        }

        // image
        let imageProduct = document.createElement("div");
        imageProduct.innerHTML = `<img src="../assets/${selectedDesserts.image}">`;
        divImageProduct.appendChild(imageProduct);

        // name
        let nameProduct = document.createElement("h2");
        nameProduct.textContent = selectedDesserts.name;
        divNameProduct.appendChild(nameProduct);

        // description
        let descriptionProduct = document.createElement("h3");
        descriptionProduct.textContent = selectedDesserts.description;
        divDescriptionProduct.appendChild(descriptionProduct);

        // calorie
        let calorieProduct = document.createElement("p");
        calorieProduct.textContent = selectedDesserts.calories + " calories";
        divCalorieProduct.appendChild(calorieProduct);

        backBtn.addEventListener('click', function(){
            if(!modalProduct.classList.contains("hidden")){
                modalProduct.classList.add("hidden");
                remove();
            };
        });
    };
};
