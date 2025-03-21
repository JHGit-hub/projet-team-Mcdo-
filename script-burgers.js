////////////// Déclaration des variables
    
let modalProduct = document.getElementById("modalProduct");
let divImageProduct = document.getElementById("imageProduct");
let backBtn = document.getElementById("backBtn");
let divNameProduct = document.getElementById("nameProduct");
let divDescriptionProduct = document.getElementById("descriptionProduct");
let divCalorieProduct = document.getElementById("calorieProduct");
let burgersListe = document.getElementById("burgersListe");  
let burgers = [];
    
fetch("../mcdo.json")
    .then(function(response) {
        if(!response.ok){
            throw new Error ("Le fichier Json n'a pas pu être charger.");
        }
        return response.json();
    })

    .then(function(data) {
        burgers = data.burgers;

    // card burgers

        for(let i = 0; i<burgers.length; i++ ){

        // creation des elements
            let cardBurgers = document.createElement("div");
            let divImage = document.createElement("div");
            let divName = document.createElement("div");
            let divCart = document.createElement("div");
            let divBtnMore = document.createElement("div");
            let name = document.createElement("h2");
            let price = document.createElement("h3");

        // liens avec le Json
            divImage.innerHTML = `<img src="../assets/${burgers[i].image}">`;
            name.textContent = burgers[i].name;
            price.innerHTML = `<span>Ajouter au panier </span> ${burgers[i].price}€`;
            divBtnMore.innerHTML = `<button onclick="viewDetails('${burgers[i].name}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;

        // integration des elements
            divCart.appendChild(price);
            divCart.id = "divCart";

            divName.appendChild(name);
            divName.id = 'divName';

            cardBurgers.appendChild(divImage);
            cardBurgers.id = "card";

            cardBurgers.appendChild(divName);
            cardBurgers.appendChild(divCart);
            cardBurgers.appendChild(divBtnMore);

        // integration dans le HTML
            burgersListe.appendChild(cardBurgers);
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
    
function viewDetails(burgerView){
    if(modalProduct.classList.contains("hidden")){
        modalProduct.classList.remove("hidden");
        remove();

        let selectedBurger = burgers.find( b=> b.name === burgerView);

        if (!selectedBurger) {
            console.error("Burger non trouvé avec l'ID :", burgerView);
            return;
        }

        // image
        let imageProduct = document.createElement("div");
        imageProduct.innerHTML = `<img src="../assets/${selectedBurger.image}">`;
        divImageProduct.appendChild(imageProduct);

        // name
        let nameProduct = document.createElement("h2");
        nameProduct.textContent = selectedBurger.name;
        divNameProduct.appendChild(nameProduct);

        // description
        let descriptionProduct = document.createElement("h3");
        descriptionProduct.textContent = selectedBurger.description;
        divDescriptionProduct.appendChild(descriptionProduct);

        // calorie
        let calorieProduct = document.createElement("p");
        calorieProduct.textContent = selectedBurger.calories + " calories";
        divCalorieProduct.appendChild(calorieProduct);
        

        backBtn.addEventListener('click', function(){
            if(!modalProduct.classList.contains("hidden")){
                modalProduct.classList.add("hidden");
                remove();
            };
        });
    };
};

    